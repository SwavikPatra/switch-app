export function parseQuestions(markdown) {
  const sections = [];
  let currentSection = null;
  let seq = 0;

  const lines = markdown.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const sectionMatch = line.match(/^## (\d+)\.\s+(.+)/);
    if (sectionMatch) {
      if (currentSection) sections.push(currentSection);
      currentSection = { id: sectionMatch[1], name: sectionMatch[2].trim(), questions: [] };
      seq = 0;
      continue;
    }

    const qMatch = line.match(/^(\d+)\.\s+\*\*(.+?)\*\*/);
    if (qMatch && currentSection) {
      seq++;
      let answerLines = [];
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].match(/^\d+\.\s+\*\*/)) break;
        if (lines[j].match(/^## /)) break;
        if (lines[j].match(/^---$/)) break;
        const aMatch = lines[j].match(/^\s{3,}- (.+)/);
        if (aMatch) answerLines.push(aMatch[1].trim());
        else {
          const text = lines[j].trim();
          if (text && !text.startsWith('*Source:') && !text.startsWith('> ')) {
            answerLines.push(text);
          }
        }
      }
      currentSection.questions.push({
        id: `${currentSection.id}.${seq}`,
        number: seq,
        section: currentSection.name,
        question: qMatch[2],
        answer: answerLines.join(' '),
      });
      continue;
    }

    const altQMatch = line.match(/^\*\*(\d+)\.\s+(.+?)\*\*/);
    if (altQMatch && currentSection) {
      seq++;
      let answerLines = [];
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].match(/^(\d+|[-*])\s/)) break;
        if (lines[j].match(/^## /)) break;
        if (lines[j].match(/^---$/)) break;
        const aMatch = lines[j].match(/^- (.+)/);
        if (aMatch) answerLines.push(aMatch[1].trim());
      }
      currentSection.questions.push({
        id: `${currentSection.id}.${seq}`,
        number: seq,
        section: currentSection.name,
        question: altQMatch[2],
        answer: answerLines.join(' '),
      });
    }
  }

  if (currentSection) sections.push(currentSection);
  return sections;
}
