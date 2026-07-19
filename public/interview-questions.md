# Top 800+ Interview Questions — Comprehensive Guide

> A curated collection of interview questions spanning Go, Python, PostgreSQL, Redis, Backend Engineering, System Design, Infrastructure, OOPs, Data Structures & Algorithms, and more.
>
> Questions sourced from real interviews (FAANG, startups, etc.), popular interview prep platforms (InterviewBit, LeetCode, Educative), GitHub repositories, and expert-curated additions.
>
> **Last Updated:** July 2026

---

## Table of Contents

1. [Go Programming Language](#1-go-programming-language)
2. [Python Programming Language](#2-python-programming-language)
3. [PostgreSQL](#3-postgresql)
4. [Redis](#4-redis)
5. [System Design](#5-system-design)
6. [Backend Engineering](#6-backend-engineering)
7. [Infrastructure & DevOps](#7-infrastructure--devops)
8. [Object-Oriented Programming (OOPs)](#8-object-oriented-programming-oops)
9. [Data Structures & Algorithms](#9-data-structures--algorithms)
10. [Operating Systems & Concurrency](#10-operating-systems--concurrency)

11. [Networking](#11-networking)
12. [Databases (General)](#12-databases-general)
13. [Low-Level Design / Design Patterns](#13-low-level-design--design-patterns)
14. [Behavioral & HR Questions](#14-behavioral--hr-questions)
15. [Security Fundamentals](#15-security-fundamentals)
16. [Software Engineering & Clean Code](#16-software-engineering--clean-code)
17. [Cloud Platforms & Architecture](#17-cloud-platforms--architecture)
18. [Form Builder — Project-Specific Questions](#18-form-builder--project-specific-questions)
19. [Connectors V2 — Project-Specific Questions](#19-connectors-v2--project-specific-questions)
20. [Task Management — Project-Specific Questions](#20-task-management--project-specific-questions)
21. [Inspection Readiness — Project-Specific Questions](#21-inspection-readiness--project-specific-questions)


---

## 1. Go Programming Language

### 1.1 Basics

1. **What is Go? Who created it and why?**
   - *Source: InterviewBit, Go community*
   - Go is a statically typed, compiled language created at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Designed for simplicity, efficiency, and built-in concurrency.

2. **What are the key features of Go?**
   - *Source: InterviewBit*
   - Statically typed, garbage collected, built-in concurrency (goroutines, channels), fast compilation, strong standard library, implicit interfaces.

3. **Is Go case-sensitive?** *(InterviewBit)*
   - Yes.

4. **What is a GOPATH? How is it different from GOROOT?** *(InterviewBit)*
   - `GOROOT` is where Go SDK is installed. `GOPATH` is the workspace directory for Go projects (source code, binaries, packages). Since Go modules (1.11+), GOPATH is less critical.

5. **What are Go packages?** *(InterviewBit)*
   - Packages are directories of `.go` files. Every Go file belongs to a package. The `main` package is special—it defines an executable.

6. **What is a slice in Go? How is it different from an array?** *(InterviewBit)*
   - Array: fixed size. Slice: dynamic, backed by an array, has length and capacity. Slice is a lightweight struct with pointer, length, capacity.

7. **What is a goroutine?** *(InterviewBit)*
   - A lightweight thread managed by the Go runtime. Created with the `go` keyword. Goroutines multiplex onto OS threads.

8. **What are channels in Go?** *(InterviewBit)*
   - Channels are typed conduits for communication between goroutines. They can be buffered or unbuffered.

9. **Can a function return multiple values in Go?** *(InterviewBit)*
   - Yes, Go supports multiple return values, commonly used for returning (result, error) pairs.

10. **What are the zero values in Go?** *(Expert addition)*
    - Variables declared without initialization get zero values: `0` for numeric, `false` for bool, `""` for string, `nil` for pointers/slices/maps/channels/interfaces.

11. **What is a blank identifier (`_`)?** *(Expert addition)*
    - Used to ignore values. Commonly used to discard unused return values or import packages for side effects.

12. **What is a struct in Go?** *(Expert addition)*
    - A composite data type grouping fields of different types. Supports methods (but not classes).

13. **What are pointers in Go?** *(InterviewBit)*
    - Variables storing memory addresses. Go supports pointer arithmetic only via `unsafe` package.

14. **What is the `defer` keyword?** *(Expert addition)*
    - Schedules a function call to run after the surrounding function returns. Executed in LIFO order.

15. **What is the difference between `make` and `new`?** *(Expert addition)*
    - `new(T)` allocates zeroed memory, returns `*T`. `make(T, args)` creates slices, maps, channels (returns initialized value, not pointer).

### 1.2 Intermediate

16. **Explain Go interfaces. How are they different from interfaces in Java?** *(InterviewBit, Expert addition)*
    - Interfaces in Go are satisfied implicitly (duck typing). A type implements an interface by implementing its methods—no `implements` keyword.

17. **What is the empty interface `interface{}`?** *(Expert addition)*
    - An interface with zero methods. Every type satisfies it. Used for unknown types, similar to `any` in Go 1.18+.

18. **How do you check if a map contains a key?** *(InterviewBit)*
    - `val, ok := myMap["key"]`. If `ok` is true, the key exists.

19. **Explain type assertion.** *(InterviewBit)*
    - Extracts the concrete value from an interface: `value := i.(Type)`. Safe form: `value, ok := i.(Type)`.

20. **How do you sort a slice of custom structs?** *(InterviewBit)*
    - Implement `sort.Interface` (Len, Less, Swap) or use `sort.Slice` with a less function.

21. **What are variadic functions?** *(InterviewBit)*
    - Functions that accept a variable number of arguments using `...T`.

22. **What is a rune? How is it different from a byte?** *(InterviewBit)*
    - `byte` is an alias for `uint8`. `rune` is an alias for `int32` representing a Unicode code point.

23. **What is shadowing in Go?** *(InterviewBit)*
    - When a variable declared in an inner scope has the same name as a variable in an outer scope, the inner variable shadows the outer one.

24. **How is memory managed in Go?** *(Expert addition)*
    - Go has a concurrent garbage collector (tricolor mark-sweep). It uses stack (goroutine stacks) and heap allocation. Escape analysis determines allocation location.

25. **What is a mutex? How do you use it in Go?** *(Expert addition)*
    - `sync.Mutex` provides mutual exclusion. Methods: `Lock()` and `Unlock()`. Use `defer` to ensure unlock.

### 1.3 Advanced

26. **Explain Go's scheduler.** *(Expert addition, inspired by real interviews)*
    - Go uses an M:N scheduler (M OS threads : N goroutines). It implements work-stealing, preemption at function calls, and logical processors (P). The `GOMAXPROCS` variable controls the number of P's.

27. **What is the select statement?** *(Expert addition)*
    - Lets a goroutine wait on multiple channel operations. It picks one that is ready, randomly if multiple are ready.

28. **How does Go handle error handling?** *(InterviewBit)*
    - Errors are values returned from functions. Use `if err != nil` pattern. Custom errors implement the `error` interface.

29. **What is `sync.WaitGroup`?** *(Expert addition)*
    - Used to wait for a collection of goroutines. Has `Add`, `Done`, and `Wait` methods.

30. **Explain `context` in Go.** *(Expert addition)*
    - The `context` package carries deadlines, cancellation signals, and request-scoped values. Used for propagating cancellation across goroutines.

31. **What is an empty struct and why use it?** *(InterviewBit)*
    - Zero bytes. Used as a set value in maps, for signaling on channels, or as a placeholder.

32. **What is race detection in Go?** *(Expert addition)*
    - The Go race detector (`-race` flag) detects unsynchronized concurrent memory accesses.

33. **Explain `sync.Pool`.** *(Expert addition)*
    - A pool of temporary objects. Reduces GC pressure by reusing allocated objects.

34. **What is `io.Reader` and `io.Writer`?** *(Expert addition)*
    - Core interfaces: `Read(p []byte) (n int, err error)` and `Write(p []byte) (n int, err error)`. Foundation of I/O in Go.

35. **How do you write tests in Go?** *(InterviewBit, Expert addition)*
    - Files ending in `_test.go`. Functions starting with `Test` in `testing` package. Supports table-driven tests, benchmarks, and examples.

36. **What is `go mod`?** *(Expert addition)*
    - Go's dependency management system. Commands: `go mod init`, `go mod tidy`, `go mod vendor`.

37. **Explain `reflect` package.** *(Expert addition)*
    - Provides runtime reflection. Can inspect types, values, and methods at runtime. Use sparingly—it's slow and breaks type safety.

38. **What are build tags in Go?** *(Expert addition)*
    - Comments like `//go:build linux` that conditionally include files during compilation.

39. **What is `unsafe` package?** *(Expert addition)*
    - Provides operations that bypass Go's type safety (pointer arithmetic, `Sizeof`). Not portable, use only when absolutely necessary.

40. **How do you implement a worker pool in Go?** *(Expert addition)*
    - Use channels: create N goroutines reading from a job channel, send jobs, close channel, use WaitGroup to wait.

42. **What is the difference between `sync.Mutex` and `sync.RWMutex`?** *(Expert addition)*
    - `RWMutex` allows multiple readers or one writer. Readers don't block readers. Writers block everyone.

43. **What happens if you close a channel twice?** *(Expert addition)*
    - Panic.

44. **What happens if you send to a closed channel?** *(Expert addition)*
    - Panic.

45. **What happens if you receive from a closed channel?** *(Expert addition)*
    - Returns the zero value immediately. Use the comma-ok idiom to check.

46. **Explain Go 1.18 generics.** *(Expert addition)*
    - Type parameters: `func Foo[T any](x T) T`. Supports constraints, type inference, and interface-based type sets.

47. **How do you gracefully shut down a Go HTTP server?** *(Expert addition)*
    - Use `Shutdown()` with a context to wait for active connections to complete before closing.

49. **What is the `init` function?** *(Expert addition)*
    - Automatically runs before `main()`, per package. Used for setup. Cannot be called explicitly.

50. **How do you build a Go program for a different platform?** *(Expert addition)*
    - Set `GOOS` and `GOARCH` environment variables, e.g. `GOOS=linux GOARCH=arm64 go build`.

51. **What is the difference between a nil slice and an empty slice?**
    - `var s []int` (nil): no backing array, len=0, cap=0, `s == nil`. `s := []int{}` (empty): backing array exists (zero-length), len=0, cap=0, `s != nil`. JSON serializes nil → `null`, empty → `[]`.

52. **How does `append` grow slices internally?**
    - Growth algorithm: doubles capacity for small sizes (<256), then grows by ~1.25x. Ensures amortized O(1) per element. New backing array allocated, old copied.

53. **What is a goroutine leak? How do you prevent it?**
    - Goroutine stuck forever (blocked on channel send without receiver, blocked on unbounded channel read, infinite loop). Prevent: ensure channels are closed, use context timeouts, use errgroup.

55. **Explain the fan-in and fan-out concurrency patterns.**
    - Fan-out: multiple goroutines read from same channel (distribute work). Fan-in: multiple goroutines write to same merged channel (collect results). Use with WaitGroup or merge channel.

56. **How does `select` behave with nil channels?**
    - A nil channel in select never becomes ready (blocks forever). Useful to disable a case dynamically. Writes/reads to nil channel block permanently.

57. **What is the difference between `make(chan int)` and `make(chan int, 1)`?**
    - Unbuffered: sender blocks until receiver receives (synchronization). Buffered (1): sender blocks only if buffer full. Unbuffered = rendezvous, buffered = message queue.

58. **What is `sync.Cond`? When would you use it?**
    - Condition variable for goroutine rendezvous. Broadcast/Wake signals to waiting goroutines. Use over channels when you need multiple goroutines to wait for a complex condition.

59. **How does `sync.Once` work internally?**
    - Uses `sync/atomic` flags + fast-path/slow-path with locks. Ensures initialization function runs exactly once. Used for singleton initialization, lazy singletons.

60. **What is `atomic.Value`? When would you use it?**
    - Atomic load/store for any type (via `interface{}`). Lockless reads of config snapshots. Type-safe at runtime: panics if stored type changes.

62. **How does `http.Client` default transport work?**
    - DefaultTransport: connection pooling (keep-alive), connection reuse, proxy support (HTTP_PROXY). Idle connections: 100, per-host. Timeouts important to set.

68. **What is the `time.After` memory leak? How to avoid?**
    - `time.After` creates a channel/goroutine that lives until the timer fires. In `select` with infinite loop, timers accumulate. Use `time.NewTimer` with `Stop()` instead.

69. **What is `bufio.Scanner`? What is the max token size?**
    - Buffered scanner for reading lines/words/bytes. Default max token: 64KB. Can increase via `Buffer()` but limited to ~4MB. For larger, use `bufio.Reader` directly.

70. **What is `io.Pipe`? When is it useful?**
    - Synchronous in-memory pipe. `PipeReader` ↔ `PipeWriter`. Blocks until read/write pair completes. Useful for testing, connecting io.Reader/io.Writer expectations.

71. **What is `crypto/rand` vs `math/rand`?**
    - `crypto/rand`: cryptographically secure (reads from /dev/urandom). `math/rand`: deterministic PRNG (for simulations, games, non-security use). Never use math/rand for secrets.

72. **What is `net/http/httptest`? How do you test HTTP handlers?**
    - `httptest.NewRecorder` + `httptest.NewRequest`. Test handler response without network. `httptest.NewServer` for integration tests with real HTTP calls.

73. **What is a nil pointer dereference? How does Go handle it?**
    - Accessing field/method of nil pointer → panic. Check with `if p == nil` before use. Common causes: missing error check, uninitialized maps (read ok, write panics), pointer type fields.

74. **How do you implement a retry mechanism in Go?**
    - Loop with exponential backoff + jitter. `time.Sleep(base * 2^attempt + random_jitter)`. Use context for cancellation. Libraries: `cenkalti/backoff`, `avast/retry-go`.

75. **What is the difference between `os.Exit()` and `panic()`?**
    - `os.Exit(1)`: immediate exit, no deferred functions run, no panic recovery. `panic()`: unwinds stack, runs defers, can be recovered. Use `panic` for programmer errors, `os.Exit` for initialization failures.

---

## 2. Python Programming Language

### 2.1 Basics

1.  **What is Python? What are the benefits of using Python?** *(InterviewBit)*
    - High-level, interpreted, general-purpose language. Benefits: simple syntax, huge standard library, extensive third-party packages, cross-platform.

2.  **What is a dynamically typed language?** *(InterviewBit)*
    - Type checking is done at runtime. Variable types can change as the program executes.

3.  **What is an interpreted language?** *(InterviewBit)*
    - Code is executed line-by-line without a separate compilation step.

4.  **What is PEP 8?** *(InterviewBit)*
    - Python Enhancement Proposal for style guidelines: indentation, naming conventions, line length, etc.

5.  **What is scope in Python?** *(InterviewBit)*
    - LEGB rule: Local, Enclosing, Global, Built-in. Python resolves variable names in this order.

6.  **What are lists and tuples? What is the key difference?** *(InterviewBit)*
    - Both ordered sequences. Lists are mutable (`[1, 2]`). Tuples are immutable (`(1, 2)`).

7.  **What are the common built-in data types?** *(InterviewBit)*
    - `int`, `float`, `complex`, `str`, `bool`, `list`, `tuple`, `set`, `frozenset`, `dict`, `NoneType`.

8.  **What is `pass` in Python?** *(InterviewBit)*
    - A null operation. Used as a placeholder where syntax requires a statement.

9.  **What are modules and packages?** *(InterviewBit)*
    - Module: a `.py` file. Package: a directory containing `__init__.py`.

10. **What is `self`?** *(InterviewBit)*
    - First parameter of instance methods. Refers to the instance itself.

11. **What is `__init__`?** *(InterviewBit)*
    - Constructor method called when an instance is created.

12. **What is `break`, `continue`, `pass`?** *(InterviewBit)*
    - `break`: exit loop. `continue`: skip to next iteration. `pass`: do nothing.

13. **What are unit tests in Python?** *(InterviewBit)*
    - Testing individual units using `unittest`, `pytest`, or `doctest`.

14. **What is a docstring?** *(InterviewBit)*
    - Documentation string inside `"""` used to document modules, classes, functions.

15. **What is slicing?** *(InterviewBit)*
    - `seq[start:stop:step]`. Extracts a portion of a sequence.

### 2.2 Intermediate

16. **How is memory managed in Python?** *(InterviewBit)*
    - Private heap. Python uses reference counting + generational garbage collector.

17. **What are decorators?** *(InterviewBit)*
    - Functions that modify other functions. `@decorator` syntax sugar for `func = decorator(func)`.

18. **What is `lambda`?** *(InterviewBit)*
    - Anonymous inline function: `lambda x: x * 2`.

19. **What is `args` and `kwargs`?** *(InterviewBit)*
    - `*args`: variable positional arguments. `**kwargs`: variable keyword arguments.

20. **What are list/dict comprehensions?** *(InterviewBit)*
    - Concise syntax: `[x*2 for x in range(10)]` or `{k: v for k, v in pairs}`.

21. **What is pickling and unpickling?** *(InterviewBit)*
    - Serialization (pickle) and deserialization (unpickle) of Python objects.

22. **What are generators?** *(InterviewBit)*
    - Functions yielding values lazily using `yield`. Memory efficient for large sequences.

23. **What are iterators?** *(InterviewBit)*
    - Objects implementing `__iter__()` and `__next__()`. Used in `for` loops.

24. **What is `PYTHONPATH`?** *(InterviewBit)*
    - Environment variable telling Python where to look for modules.

25. **What is the difference between `deepcopy` and `shallow copy`?** *(InterviewBit)*
    - Shallow copy creates a new object but references nested objects. Deep copy recursively copies everything.

26. **What is GIL?** *(InterviewBit)*
    - Global Interpreter Lock: a mutex that allows only one thread to execute Python bytecode at a time.

27. **What are context managers?** *(InterviewBit)*
    - Objects managing resources using `with` statement. Implement `__enter__` and `__exit__`.

28. **What is MRO (Method Resolution Order)?** *(InterviewBit)*
    - The order in which Python looks up methods in inheritance hierarchies. C3 linearization algorithm.

29. **Explain `__slots__`.** *(InterviewBit)*
    - Reduces memory by preventing dynamic attribute creation. Declares fixed attributes.

30. **What is `async`/`await`?** *(InterviewBit)*
    - Asynchronous programming in Python. `async def` defines a coroutine. `await` suspends execution.

31. **What is duck typing?** *(InterviewBit)*
    - "If it walks like a duck and quacks like a duck, it's a duck." Objects are used by behavior, not type.

32. **What is `__new__` vs `__init__`?** *(InterviewBit)*
    - `__new__` creates the instance (first arg: class). `__init__` initializes it (first arg: instance).

33. **What are metaclasses?** *(InterviewBit)*
    - Classes of classes. Define how classes behave. `type` is the default metaclass.

34. **What is `functools.partial`?** *(Expert addition)*
    - Creates partial functions by fixing some arguments of a function.

35. **What is `itertools`?** *(Expert addition)*
    - Module with iterator-building tools: `chain`, `cycle`, `product`, `permutations`, `combinations`.

### 2.3 Advanced

36. **How does Python's GC work?** *(Expert addition)*
    - Reference counting + generational collector (3 generations). GC collects cycles in container objects. `gc` module for manual control.

37. **What is `asyncio` and how does it work under the hood?** *(Expert addition)*
    - Event loop (select/epoll/kqueue), coroutines, tasks, futures. Cooperative multitasking on a single thread.

38. **How do descriptors work?** *(InterviewBit)*
    - Objects implementing `__get__`, `__set__`, `__delete__`. Used in `@property`, `@staticmethod`, `@classmethod`.

39. **What is `__call__`?** *(Expert addition)*
    - Makes an instance callable like a function.

40. **What is the difference between `classmethod`, `staticmethod`, and regular method?** *(Expert addition)*
    - Regular: receives `self`. `@classmethod`: receives `cls`. `@staticmethod`: receives nothing.

41. **What is type hinting?** *(Expert addition)*
    - PEP 484: `def greet(name: str) -> str:`. Not enforced at runtime but used by linters/type checkers.

42. **What is the difference between `is` and `==`?** *(Tricky Python, InterviewBit)*
    - `is` checks identity (same object). `==` checks equality (same value).

43. **Why are mutable default arguments dangerous?** *(Tricky Python, InterviewBit)*
    - Defaults are evaluated once at function definition. All calls share the same mutable object.

44. **What is `__name__ == "__main__"`?** *(InterviewBit)*
    - Checks if the script is run directly vs imported as a module.

45. **What is `multiprocessing` vs `threading`?** *(InterviewBit)*
    - `threading` uses OS threads (GIL-bound for CPU). `multiprocessing` uses separate processes (bypasses GIL).

46. **How does `super()` work?** *(Expert addition)*
    - Returns a proxy object that delegates method calls using MRO. Essential for cooperative multiple inheritance.

47. **What is a coroutine vs generator vs thread?**
    - Generator: produces values lazily via `yield`. Coroutine (`async def`): suspendable function, cooperative multitasking. Thread: preemptively scheduled by OS. Coroutines are single-threaded, no GIL issue.

48. **What is `concurrent.futures` and when would you use it?**
    - High-level interface for async execution. `ThreadPoolExecutor` (threads) and `ProcessPoolExecutor` (processes). Submit tasks, get futures, manage timeouts.

49. **What is `dataclass` vs `NamedTuple` vs `TypedDict`?**
    - `dataclass`: mutable, flexible, default factories, `__post_init__`. `NamedTuple`: immutable, lightweight, tuple-like. `TypedDict`: for dict type hints, runtime accessible.

50. **What is `functools.lru_cache`?**
    - Decorator memoizing function results. Uses dict + linked list for LRU eviction. Thread-safe. Useful for expensive, pure functions.

51. **What is `pathlib` vs `os.path`?**
    - `pathlib`: object-oriented paths, cross-platform, composable (`Path / "subdir"`). `os.path`: string-based, older. Prefer pathlib for new code.

52. **What are `__getattr__` vs `__getattribute__`?**
    - `__getattribute__`: called unconditionally on every attribute access. `__getattr__`: called only when normal lookup fails. Use `__getattr__` for dynamic attributes.

53. **What is `__missing__`?**
    - Called by `dict.__getitem__` when key not found. Used in `defaultdict`. Only for dict subclasses.

54. **What is `collections.deque`? Why is it faster than list for pop(0)?**
    - Double-ended queue. O(1) for append/pop at both ends (list pop(0) is O(n) because of shifting).

55. **What is `itertools.groupby`? Caveat?**
    - Groups consecutive keys. Caveat: requires sorted input (groups adjacent equal keys only).

56. **What is `subprocess.run` vs `Popen`?**
    - `subprocess.run`: high-level, waits for completion, returns CompletedProcess. `Popen`: low-level, async, pipe management.

57. **What is the `logging` hierarchy? Logger, Handler, Formatter, Filter?**
    - Logger: named channel for log messages. Handler: sends output (file, console, network). Formatter: sets output format. Filter: fine-grained log control.

58. **What is `__slots__` and how does it reduce memory?**
    - Prevents `__dict__` creation, stores attributes in a fixed-size tuple. Dramatically reduces memory for many instances.

59. **What is `enum.Enum`?**
    - Symbolic constants with name, value, and methods. Prevents magic strings/numbers.

60. **What is `__repr__` vs `__str__`?**
    - `__repr__`: unambiguous, for debugging. `__str__`: readable, for end users. `print(obj)` calls `__str__`, `repr(obj)` calls `__repr__`.

61. **What is `__eq__` and `__hash__`? Why must they be consistent?**
    - `__eq__`: defines equality. `__hash__`: defines hash for dict/set use. Equal objects must have same hash.

62. **What is PEP 572? (walrus operator `:=`)**
    - Assignment expression: assign within expression. `if (n := len(x)) > 10:`. Useful for while loops, list comprehensions with temp values.

---

## 3. PostgreSQL

### 3.1 Basics

1.  **What is PostgreSQL?** *(InterviewBit, Expert addition)*
    - Open-source, object-relational database system. ACID compliant, extensible, MVCC based.

2.  **What is the default port for PostgreSQL?** *(Expert addition)*
    - 5432.

3.  **What is a schema in PostgreSQL?** *(Expert addition)*
    - A namespace containing database objects (tables, views, functions). `public` is the default schema.

4.  **What is a sequence?** *(Expert addition)*
    - A schema object generating unique numeric values. Used for auto-increment.

5.  **What is `SERIAL`?** *(Expert addition)*
    - Pseudo-type creating a sequence-backed auto-incrementing integer column.

6.  **What is MVCC in PostgreSQL?** *(Expert addition, asked at Uber)*
    - Multi-Version Concurrency Control. Each transaction sees a snapshot of data. Readers don't block writers and vice versa.

7.  **What are the different types of indexes?** *(Expert addition)*
    - B-tree (default), Hash, GiST, GIN, SP-GiST, BRIN.

8.  **What is `VACUUM`?** *(Expert addition)*
    - Reclaims storage from dead tuples. `VACUUM FULL` recompacts the table (takes an exclusive lock).

9.  **What is `EXPLAIN ANALYZE`?** *(Expert addition)*
    - Shows query execution plan with actual timing and row counts.

10. **What is a CTE?** *(Expert addition)*
    - Common Table Expression. A temporary result set used within a `WITH` clause.

### 3.2 Intermediate

11. **What is a window function?** *(Expert addition, asked at Postgres-focused interviews)*
    - Performs a calculation across a set of rows related to the current row. Uses `OVER` clause.

12. **What is the difference between `WHERE` and `HAVING`?** *(Expert addition)*
    - `WHERE` filters rows before aggregation. `HAVING` filters after aggregation.

13. **What is a partial index?** *(Expert addition)*
    - Index on a subset of rows using a `WHERE` clause. Smaller, faster.

14. **What is a covering index?** *(Expert addition)*
    - Index that includes all columns needed by a query, eliminating table access.

15. **What is `pg_stat_statements`?** *(Expert addition)*
    - An extension tracking query execution statistics (calls, total time, rows).

16. **What are the ACID properties in PostgreSQL?** *(Expert addition)*
    - Atomicity (WAL + transactions), Consistency (constraints), Isolation (MVCC), Durability (WAL).

17. **What is WAL (Write-Ahead Log)?** *(Expert addition)*
    - Log recording all changes. Used for crash recovery, replication, and point-in-time recovery.

18. **What is replication in PostgreSQL?** *(Expert addition)*
    - Streaming replication (sync/async) sends WAL to replicas. Logical replication replicates at object level.

19. **What is connection pooling? Why use PgBouncer?** *(Expert addition)*
    - Maintains persistent connections to DB, reducing connection overhead. PgBouncer is lightweight, supports transaction pooling.

20. **What is the difference between `TRUNCATE` and `DELETE`?** *(Expert addition)*
    - `DELETE` scans rows, fires triggers, can be rolled back. `TRUNCATE` removes all rows quickly (cannot be rolled back in some contexts), resets auto-increment.

### 3.3 Advanced

21. **How does PostgreSQL handle concurrency?** *(Expert addition)*
    - MVCC with snapshot isolation. Each transaction gets a transaction ID (xmin, xmax). Dead tuples cleaned by autovacuum.

22. **What is autovacuum?** *(Expert addition)*
    - Background process automating VACUUM and ANALYZE based on dead tuple thresholds.

23. **Explain table partitioning in PostgreSQL.** *(Expert addition)*
    - Range, List, Hash partitioning. Improves query performance and manageability on large tables.

24. **What is TOAST?** *(Expert addition)*
    - The Oversized-Attribute Storage Technique. Large values are compressed and stored in a separate table.

25. **How do you perform zero-downtime migrations?** *(Expert addition, asked at production-focused roles)*
    - Use `CREATE INDEX CONCURRENTLY`, add columns with `NOT NULL DEFAULT` carefully, use `pt-online-schema-change` or `pgroll`.

26. **What are Foreign Data Wrappers (FDW)?** *(Expert addition)*
    - `postgres_fdw` allows querying external PostgreSQL databases as if local tables.

27. **What is `pg_hba.conf`?** *(Expert addition)*
    - Host-Based Authentication configuration file. Defines which hosts/users can connect and auth method.

28. **What is `pg_rewind`?** *(Expert addition)*
    - Used to sync a former primary after failover, avoiding full rebuild.

29. **What is the `EXPLAIN` output telling you?** *(Expert addition)*
    - Node types: Seq Scan, Index Scan, Index Only Scan, Bitmap Heap Scan, Nested Loop, Hash Join, Merge Join. Cost units are arbitrary.

30. **What is a bloom filter index?** *(Expert addition)*
    - Probabilistic index for multi-column equality queries. Supported via `bloom` extension.

31. **What is `LATERAL JOIN`? When would you use it?**
    - Allows subqueries in FROM to reference columns from preceding FROM items. Useful for per-row top-N queries, calling set-returning functions per row.

32. **What is a `RECURSIVE CTE`? Example use case?**
    - CTE that references itself. Used for tree/graph traversal (org charts, bill of materials, graph paths). Syntax: `WITH RECURSIVE cte AS (base UNION ALL recursive)`.

33. **What is `SKIP LOCKED`? When is it useful?**
    - Skips rows locked by other transactions. Used for job queues / worker patterns — multiple workers can safely pop jobs without blocking on locked rows.

34. **How does `ON CONFLICT` (UPSERT) work in PostgreSQL?**
    - Attempt INSERT, if conflict (on constraint) executes DO UPDATE or DO NOTHING. Atomic — no race condition between check and insert.

35. **What are JSONB operators and how do you index JSONB?**
    - Operators: `->` (JSON field), `->>` (text), `@>` (contains), `?` (key exists). Index with GIN: `CREATE INDEX ON tbl USING GIN (jsonb_col)`.

36. **How does PostgreSQL full-text search work?**
    - `to_tsvector()` converts text to searchable tokens. `to_tsquery()` builds query. `@@` operator matches. Ranking with `ts_rank()`. GIN index for performance.

37. **What is `pg_stat_activity`? How do you use it for troubleshooting?**
    - Shows current server processes: PID, query, state, wait event, duration. Cancel queries with `pg_cancel_backend(pid)`, terminate with `pg_terminate_backend(pid)`.

38. **What is `pg_stat_bgwriter`? What metrics matter for tuning?**
    - Background writer stats. Key: `checkpoints_timed` vs `checkpoints_req` (ratio), `buffers_backend` (backend writes), `maxwritten_clean`. Fewer checkpoints = better.

39. **What is `pg_stat_user_tables` for performance monitoring?**
    - Per-table stats: `seq_scan` (sequential scans), `idx_scan`, `n_tup_mod`, `n_tup_hot_upd` (heap-only tuples), `last_vacuum`, `last_autoanalyze`. High seq_scan ratio = missing index.

40. **Why is `COUNT(*)` slow in PostgreSQL? How to optimize?**
    - PostgreSQL doesn't maintain row counts (MVCC visibility per row). Sequential scan required. Use approximate counts (pg_class.reltuples), or counters via triggers.

41. **What is a Bitmap Scan vs Index Scan vs Index-Only Scan?**
    - Index Scan: fetches rows via index pointer. Bitmap Scan: builds bitmap of matching page locations, then fetches sorted (reduces random I/O). Index-Only Scan: all needed data in index.

42. **What is `pg_prewarm`? When would you use it?**
    - Extension to preload table data into shared buffers. Useful after restart to avoid cold-cache performance degradation.

43. **What is `auto_explain`? How do you use it?**
    - Extension that logs execution plans of slow queries. Configure: `auto_explain.log_min_duration = 1000` (ms). Invaluable for production query analysis.

44. **What is declarative partitioning vs inheritance partitioning?**
    - Declarative (PG10+): `PARTITION BY RANGE/LIST/HASH`. Better query planner support, partition pruning, simpler syntax. Inheritance: older approach, more flexible but less optimized.

50. **What is partition pruning?**
    - Query planner eliminates irrelevant partitions at plan time based on WHERE clauses. Requires partition key in filter. Dramatically improves query performance on large partitioned tables.

51. **What is the difference between GIN and GiST indexes?**
    - GIN: good for composite values (arrays, JSONB, tsvector). Slower writes, faster searches. GiST: good for full-text, spatial data, ranges. Better for unordered data.

52. **When would you use a BRIN index?**
    - Block Range INdex. Best for large append-only tables where data is physically ordered (time-series, logs). Extremely compact (thousands of times smaller than B-tree).

53. **What is `EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON)`?**
    - ANALYZE: execute and show actual timing/rows. BUFFERS: show shared hit/read/dirtied blocks. FORMAT JSON: machine-parseable output for programmatic analysis.

54. **What are extended statistics (`CREATE STATISTICS`)?**
    - Statistics across multiple columns. Types: `ndistinct` (distinct combination count), `dependencies` (functional dependency), `mcv` (most common values — full correlation).

55. **What is `default_statistics_target`? How does it affect performance?**
    - Controls ANALYZE sample size (default 100). Higher values → better query plans but slower ANALYZE. Bump up for columns with skewed data distributions.

56. **What is `pg_stat_statements`? How do you identify the worst queries?**
    - Tracks SQL statement execution stats. Find worst: `SELECT * FROM pg_stat_statements ORDER BY mean_time DESC` or `total_time / calls` for average.

57. **What is TOAST and how does it work internally?**
    - The Oversized-Attribute Storage Technique. Values > ~2KB: compressed, optionally stored out-of-line in `pg_toast` table.

58. **What is `pg_notify` / `LISTEN` / `NOTIFY`?**
    - Async event system within PostgreSQL. NOTIFY sends a message, LISTEN receives. Used for cache invalidation, triggering application logic.

62. **What is `pgcrypto`? Common use cases?**
    - Cryptographic functions: `pgp_sym_encrypt`, `pgp_pub_encrypt`, `digest`, `hmac`, `gen_random_bytes`. For column-level encryption, password hashing, random generation.

63. **What is `pg_hint_plan`? When would you reach for it?**
    - Extension to force query plan choices (index scans, join methods). Last resort when planner makes poor choices due to outdated stats or complex queries.

64. **What are the key PostgreSQL config parameters for performance tuning?**
    - `shared_buffers` (25% RAM), `work_mem` (per-sort/hash, don't set too high), `maintenance_work_mem` (VACUUM/CREATE INDEX), `effective_cache_size` (OS cache estimate), `random_page_cost` (4.0 for HDD, 1.1 for SSD), `wal_buffers`, `max_worker_processes`.

65. **How does PostgreSQL's cost-based optimizer work?**
    - Planner generates possible plans, estimates costs using `seq_page_cost`, `random_page_cost`, `cpu_tuple_cost`, `cpu_index_tuple_cost`, `cpu_operator_cost`. Statistics from pg_class and pg_statistic.

66. **What is `pg_rewind`?**
    - Syncs a former primary that was partitioned off after failover. Faster than full rebuild, replays only the divergence from the new primary's WAL.

67. **What is `pg_ctl promote` vs `pg_ctl failover`?**
    - `pg_ctl promote` manually triggers a standby to become primary. In automatic failover (repmgr, Patroni, PAF), this happens automatically based on consensus.

68. **What is Patroni?**
    - Popular HA solution for PostgreSQL. Uses DCS (etcd/Consul/ZooKeeper) for leader election. Automates failover, handles cluster topology management.

69. **What is `pglogical`? How does it differ from built-in logical replication?**
    - Third-party extension (now largely superseded by built-in logical replication in PG10+). Provided cross-version and cross-platform logical replication earlier.

70. **What is the difference between `VACUUM` and `ANALYZE`?**
    - VACUUM: removes dead tuples, frees space, updates visibility map. ANALYZE: updates statistics for the query planner. `ANALYZE` is read-only (no cleanup).

71. **What is the visibility map?**
    - Per-page bitmap tracking which pages have all rows visible to all transactions. Enables index-only scans (no need to check tuple visibility) and improves VACUUM efficiency.

72. **What is `pg_stat_all_indexes`? How do you find unused indexes?**
    - `pg_stat_all_indexes` shows index usage (idx_scan). Find unused: `SELECT * FROM pg_stat_user_indexes WHERE idx_scan = 0 ORDER BY relname`. Consider dropping or monitoring.

73. **How do you implement soft delete vs hard delete? Trade-offs?**
    - Soft: mark `deleted_at` column. Pros: recoverable, referential integrity. Cons: query complexity (WHERE deleted_at IS NULL), no UNIQUE on soft-deleted rows.

74. **What is a GiST index? What are common use cases?**
    - Generalized Search Tree. Supports geometric data (points, polygons), full-text search, range types, arrays of IP ranges. Extension-friendly index framework.

75. **What is `ORDER BY ... NULLS FIRST / LAST`?**
    - Controls NULL sort order. Default: NULLS LAST for ASC, NULLS FIRST for DESC. Important for pagination and query correctness with nullable columns.

76. **What is a partial unique index? Example use?**
    - Unique index on a subset of rows. Example: `CREATE UNIQUE INDEX ON users (email) WHERE deleted_at IS NULL` — allows soft-delete without losing email uniqueness.

77. **How do you implement pagination efficiently?**
    - Cursor-based (keyset pagination): `WHERE id > $last_seen_id ORDER BY id LIMIT 100`. Offset-based: `OFFSET 10000` gets slower as offset grows (must scan all skipped rows).

78. **What is `pg_stat_replication` and `pg_stat_subscription`?**
    - Replication statistics: `pg_stat_replication` shows WAL sender state (sync/async), lag in bytes. `pg_stat_subscription` shows subscription worker status.

79. **What is a WAL segment? What is `wal_size` / `max_wal_size` / `min_wal_size`?**
    - WAL segments are 16MB files. `max_wal_size` (default 1GB): trigger checkpoint when WAL usage exceeds this. `min_wal_size`: target WAL space to retain (for recycling).

80. **What is `pg_basebackup`?**
    - Creates a physical backup of the entire cluster. Used for setting up replicas (streaming replication) and full recovery. Takes proper locks, includes WAL.

---

## 4. Redis

### 4.1 Basics

1.  **What is Redis?** *(InterviewBit, Expert addition)*
    - Remote Dictionary Server. In-memory data structure store. Used as cache, message broker, database. Open-source.

2.  **What data structures does Redis support?** *(Expert addition)*
    - Strings, Lists, Sets, Sorted Sets, Hashes, Bitmaps, HyperLogLogs, Geospatial, Streams.

3.  **What is the default port for Redis?** *(Expert addition)*
    - 6379.

4.  **What is Redis persistence?** *(Expert addition)*
    - RDB (point-in-time snapshots) and AOF (append-only file log). Can use both.

5.  **What is the difference between RDB and AOF?** *(Expert addition)*
    - RDB: compact snapshot, slower saves, good for backups. AOF: logs every write, more durable, larger.

6.  **What is Redis replication?** *(Expert addition)*
    - Master-replica (leader-follower). Replicas are read-only by default. Asynchronous replication.

7.  **What is Redis sentinel?** *(Expert addition)*
    - High-availability solution: monitoring, notification, automatic failover.

8.  **What is Redis cluster?** *(Expert addition)*
    - Distributed implementation: sharding across nodes, automatic failover, no single point of failure.

9.  **What are Redis Transactions?** *(Expert addition)*
    - `MULTI`, `EXEC`, `DISCARD`, `WATCH`. Atomic execution of commands, but no rollback.

10. **What are keyspace notifications?** *(Expert addition)*
    - Pub/Sub notifications when key events occur (expired, evicted, set, etc.).

### 4.2 Intermediate

11. **What is Redis eviction policy?** *(Expert addition)*
    - `noeviction`, `allkeys-lru`, `volatile-lru`, `allkeys-random`, `volatile-random`, `volatile-ttl`, `allkeys-lfu`, `volatile-lfu`.

12. **What is `LRU` cache in Redis?** *(Expert addition)*
    - Least Recently Used. Redis uses approximate LRU (sampling keys) for efficiency.

13. **What is a Redis pipeline?** *(Expert addition)*
    - Sends multiple commands at once without waiting for replies. Reduces round-trip latency.

14. **What is Lua scripting in Redis?** *(Expert addition)*
    - `EVAL` command runs Lua scripts atomically on the server. Used for complex operations.

15. **How do you handle cache invalidation in Redis?** *(Expert addition, asked at FAANG)*
    - TTL (expiry), write-through, write-behind, cache-aside patterns. Publish/subscribe for invalidation.

16. **What is Redis Stream?** *(Expert addition)*
    - Append-only log data structure. Supports consumer groups, message acknowledgment, and blocking reads.

17. **What is a Redis Bloom filter?** *(Expert addition)*
    - Probabilistic data structure via `RedisBloom` module. Tests if an element is definitely not in a set.

18. **What is the difference between cache-aside and write-through?** *(Expert addition)*
    - Cache-aside: application reads from cache, on miss loads from DB. Write-through: writes go to both cache and DB synchronously.

19. **What is Redis's max memory?** *(Expert addition)*
    - Configurable via `maxmemory` in redis.conf. Default: unlimited on 64-bit systems.

20. **How is Redis single-threaded but still fast?** *(Expert addition, common interview question)*
    - Single-threaded event loop (I/O multiplexing using epoll/kqueue). In-memory operations are fast. No context switching overhead.

### 4.3 Advanced

21. **Explain Redis Cluster hashing.** *(Expert addition)*
    - Uses CRC16 hash of the key modulo 16384 (hash slots). Each node handles a subset of hash slots.

22. **What is Redis's `WAIT` command?** *(Expert addition)*
    - Waits for replicas to acknowledge writes. Provides synchronous replication at the command level.

23. **How do you migrate keys in Redis Cluster?** *(Expert addition)*
    - `CLUSTER SETSLOT`, `MIGRATE` command, or using Redis Cluster's resharding tool.

24. **What is `SCAN` vs `KEYS`?** *(Expert addition)*
    - `KEYS` blocks the server, returns all matching keys. `SCAN` iterates incrementally (cursor-based), non-blocking.

25. **How does Redis handle failover in Cluster mode?** *(Expert addition)*
    - Cluster nodes exchange gossip messages. If a master is unreachable by majority of replicas, a replica is promoted.

26. **What is Redis on Flash?** *(Expert addition)*
    - Redis Enterprise feature: stores hot data in RAM, warm data on SSD. Cost-effective for large datasets.

27. **What is Redlock?** *(Expert addition)*
    - Distributed lock algorithm using Redis. Acquires locks on majority of Redis nodes.

28. **How do you optimize memory in Redis?** *(Expert addition)*
    - Use hash encoding for small objects, enable compression, use appropriate data types, set `maxmemory`.

29. **What is `INFO` command?** *(Expert addition)*
    - Returns server statistics: memory, CPU, connected clients, replication, keyspace, etc.

30. **What are Redis Modules?** *(Expert addition)*
    - Extend Redis with new data types/commands. Examples: RediSearch, RedisJSON, RedisGraph, RedisTimeSeries.

31. **What is RediSearch? What features does it add to Redis?**
    - Full-text search, auto-complete, aggregation, highlighting, phonetic search, vector similarity search. Index on Redis hashes/JSON. Real-time indexing.

32. **How do you implement a distributed rate limiter with Redis?**
    - Fixed window: INCR with TTL. Sliding window: sorted set with timestamp scores, `ZREMRANGEBYSCORE`. Token bucket: Lua script for atomicity.

33. **What is Redis on Flash (RoF)?**
    - Redis Enterprise feature. Hot data in RAM, warm data on SSD/Flash. Transparent to applications. Reduces cost for large datasets with access patterns skewed to hot data.

34. **How does Redis Cluster handle resharding?**
    - Moves hash slots between nodes. Source: `CLUSTER GETKEYSINSLOT` + `MIGRATE`. Target cluster aware via gossip. Live migration — slots served during migration.

35. **What is Redis as a side cache vs primary database?**
    - Side cache: L1/L2 pattern, data always in DB, cache miss loads from DB. Primary: durable writes (AOF/RDB), recovery from persistence. Redis as primary is risky without proper AOF config.

36. **What is `CONFIG SET` vs `CONFIG REWRITE`?**
    - `CONFIG SET`: runtime config change (no persist). `CONFIG REWRITE`: writes current config to redis.conf (persists across restarts).

37. **What is `CLIENT TRACKING`? How does server-assisted client side caching work?**
    - (Redis 6+) Server tracks which keys a client has accessed, sends invalidation messages when keys change. Client maintains local cache. Reduces network round-trips.

38. **What is the `ACL` system in Redis 6+?**
    - Per-user: allowed commands, key patterns, password, channels. `ACL SETUSER alice on >password +@all -@dangerous ~*`. Granular security, replaces requirepass.

39. **What is `HELLO` command? (Redis 6+)**
    - Handshake with RESP3 protocol. Enables typed replies (maps, sets, null vs empty array). `HELLO 3` switches to RESP3.

40. **What is `XAUTOCLAIM`? (Redis Streams)**
    - Auto-claims pending messages from failed consumers. Scans PEL in background. Unlike `XCLAIM`, doesn't require knowing message IDs. Part of Stream consumer group reliability.

41. **What is `RESTORE` / `DUMP` in Redis?**
    - Serialize (dump) and deserialize (restore) keys with internal encoding. Used for key-level migration, backup. `RESTORE` can replace TTL, check via ABSTTL/REPLACE.

42. **What is a Redis benchmark? How do you measure performance?**
    - `redis-benchmark` tool. Measure: ops/sec, latency percentile (p50, p95, p99). Factors: network latency, pipelining, data size, persistence settings.

43. **How do you monitor Redis? What are key metrics?**
    - `INFO memory` (used_memory, fragmentation ratio), `INFO stats` (keyspace hits/misses, evicted_keys), `INFO cpu`, `INFO clients`, `LATENCY DOCTOR`, `SLOWLOG GET`.

44. **What is `LATENCY` command? How does the latency monitoring framework work?**
    - Records command execution latencies via event loop samples. `LATENCY HISTORY`, `LATENCY GRAPH`, `LATENCY DOCTOR`. Detects latency spikes, identifies root causes.

45. **What are common Redis anti-patterns?**
    - Too many keys (use hash instead of individual keys), large values (>10MB), no TTL on cache, `KEYS *` in production, not using pipeline for batch ops, not handling connection errors.

---

## 5. System Design

### 5.1 Foundational Concepts

1.  **How do you design a URL shortener (like TinyURL)?** *(checkcheckzz/system-design-interview, LeetCode)*
2.  **Design a chat system (like WhatsApp, Messenger).** *(checkcheckzz)*
3.  **Design a social media news feed (like Facebook, Twitter).** *(checkcheckzz)*
4.  **Design a video streaming platform (like YouTube, Netflix).** *(checkcheckzz)*
5.  **Design a distributed key-value store.** *(checkcheckzz)*
6.  **Design a rate limiter.** *(LeetCode, FAANG favorite)*
7.  **Design a search engine.** *(checkcheckzz)*
8.  **Design a recommendation system.** *(checkcheckzz)*
9.  **Design a file storage system (like Google Drive, Dropbox).** *(checkcheckzz)*
10. **Design a cache system (like Memcached/Redis).** *(checkcheckzz)*
11. **Design a web crawler.** *(checkcheckzz)*
12. **Design a real-time leaderboard.** *(Expert addition)*
13. **Design an API gateway / load balancer.** *(Expert addition)*
14. **Design a CDN.** *(checkcheckzz)*
15. **Design a notification system (push, email, SMS).** *(Expert addition)*
16. **Design a payment system.** *(Expert addition, asked at fintech)*
17. **Design an e-commerce checkout system.** *(Expert addition)*
18. **Design a food delivery app (like Uber Eats, Zomato).** *(Expert addition)*
19. **Design a ride-sharing system (like Uber, Lyft).** *(checkcheckzz, Expert addition)*
20. **Design a distributed locking system.** *(Expert addition)*

### 5.2 Key Concepts

21. **Explain CAP theorem.** *(Educative, Expert addition)*
    - Consistency, Availability, Partition tolerance. Pick two.

22. **What is ACID vs BASE?** *(Expert addition)*
    - ACID: Atomicity, Consistency, Isolation, Durability (relational). BASE: Basically Available, Soft state, Eventually consistent (NoSQL).

23. **What is consistent hashing?** *(Expert addition)*
    - Hashing technique minimizing rehashing when nodes are added/removed. Used in DynamoDB, Cassandra, Discord.

24. **What is eventual consistency?** *(Expert addition)*
    - Given enough time without updates, all replicas converge to the same value.

25. **What is sharding?** *(Expert addition)*
    - Horizontal partitioning: splitting data across multiple databases/nodes based on a shard key.

26. **What is horizontal vs vertical scaling?** *(Expert addition)*
    - Horizontal: add more machines. Vertical: add more power to existing machine.

27. **What is a load balancer? What algorithms does it use?** *(Expert addition)*
    - Distributes traffic across servers. Algorithms: Round Robin, Least Connections, IP Hash, Weighted.

28. **What is a message queue? When do you use it?** *(Expert addition)*
    - Asynchronous communication between services. Decoupling, buffering, fault tolerance. Examples: Kafka, RabbitMQ, SQS.

29. **What is CQRS?** *(Expert addition)*
    - Command Query Responsibility Segregation. Separate read and write models.

30. **What is Event Sourcing?** *(Expert addition)*
    - Store state changes as a sequence of events. Current state derived from replaying events.

31. **What is a reverse proxy?** *(Expert addition)*
    - Sits in front of servers, forwards client requests. Used for load balancing, caching, SSL termination.

32. **Explain the difference between REST and gRPC.** *(Expert addition)*
    - REST: HTTP/1.1, JSON, stateless. gRPC: HTTP/2, Protocol Buffers, streaming, bidirectional.

33. **What is a service mesh?** *(Expert addition)*
    - Infrastructure layer for service-to-service communication. Sidecar proxies handle traffic, observability, security. Istio, Linkerd.

34. **What is idempotency?** *(Expert addition)*
    - An operation producing the same result regardless of how many times it's executed. Critical in payment/distributed systems.

35. **What are the different consistency levels?** *(Expert addition)*
    - Strong, Eventual, Causal, Read-your-writes, Session, Monotonic.

### 5.2 Foundational Concepts (continued)

21. **Design a real-time chat system (WhatsApp/Messenger).** *(checkcheckzz, Expert addition)*
    - WebSocket for real-time, message queue for delivery, NoSQL for message storage, sequence numbers for ordering, end-to-end encryption, presence service.

22. **Design a real-time collaborative editor (Google Docs).** *(Expert addition)*
    - Operational Transformation (OT) or CRDTs for conflict resolution. Differential sync. WebSocket for real-time. Version tree for history. OT: transform ops based on concurrent edits.

23. **Design a job scheduler (like cron at scale).** *(Expert addition)*
    - Distributed scheduler using consistent hashing or lease-based assignment. Job queue (Redis/Database). Leader election for coordinator. Retry with exponential backoff.

24. **Design a content delivery network (CDN).** *(checkcheckzz)*
    - Edge nodes caching static content. Origin pull vs push. Geographic DNS routing. Cache invalidation via TTL or API. Multi-CDN for redundancy.

25. **Design a distributed cache (like Memcached).** *(checkcheckzz)*
    - Consistent hashing for distribution. LRU/LFU eviction. Client-side sharding or proxy layer (Twemproxy). Failure handling: hash ring rebalancing.

26. **Design a logging system (like ELK stack).** *(Expert addition)*
    - Agent on each node → Buffer (Kafka) → Indexer (Elasticsearch) → UI (Kibana). Structured logging format. Retention policies. Hot/warm/cold storage tiers.

27. **Design a metrics/monitoring system (like Prometheus).** *(Expert addition)*
    - Pull-based model: scrape targets at intervals. Time-series database: periodic compaction, downsampling. Alerting rules → Alertmanager. Service discovery integration.

28. **Design a distributed queue (like Kafka/RabbitMQ).** *(Expert addition)*
    - Partitioned log (Kafka): append-only, offset tracking, consumer groups. Message broker (RabbitMQ): exchanges, bindings, ACK mechanism. Durability vs performance trade-offs.

29. **Design a feature flag / experimentation system.** *(Expert addition)*
    - Feature flag service with config store. Targeting rules (user ID, cohort, percentage). A/B testing: statistical significance, bucketing. Clean up old flags.

30. **Design a distributed ID generator.** *(Expert addition, Twitter Snowflake)*
    - Snowflake: timestamp (41 bits) + worker ID (10 bits) + sequence (12 bits). 64-bit unique ID, time-ordered. Alternatives: UUIDv7 (time-ordered), database sequences, Redis INCR.

31. **Design a distributed file system (like GFS / HDFS).** *(checkcheckzz)*
    - Single master (NameNode) + multiple chunkservers. Files split into fixed-size chunks. Replication (3x default). Leases for write consistency. Append-only access.

32. **Design a proximity / location-based service.** *(Expert addition)*
    - Geohash (Z-order curve) or QuadTree for spatial indexing. S2 geometry library (Google). Grid-based approach: pre-compute nearby places. Uber's H3 hexagonal grid.

33. **Design a data pipeline / ETL system.** *(Expert addition)*
    - Extract: change data capture (CDC) or batch pulls. Transform: stream processing (Flink) or batch (Spark, MapReduce). Load: warehouse (Snowflake, Redshift, BigQuery).

34. **Design a customer support / ticketing system like Zendesk.** *(Expert addition)*
    - Ticket CRUD with state machine (open → assigned → in-progress → resolved). Team assignment rules. SLAs with escalation. Search with full-text index.

35. **Design a social media feed (Twitter/Facebook).** *(checkcheckzz)*
    - Push (fan-out on write): pre-compute feeds for active users. Pull (fan-out on read): fetch on request — for celebrities. Hybrid approach. Feed ranking: ML scoring.

36. **Design a web crawler.** *(checkcheckzz)*
    - URL frontier with politeness (respect robots.txt, delay per domain). Deduplication (Bloom filter). Fetch → Parse → Extract links → Index. Distributed workers + queue.

37. **Design a search autocomplete / typeahead system.** *(Expert addition)*
    - Trie + frequency ranking. Top-N suggestions at each node. Pre-compute top queries at intervals. Redis sorted sets for real-time trending. Fuzzy matching via edit distance.

38. **Design a digital wallet / payment system.** *(Expert addition)*
    - Idempotency key for every transaction. Ledger: double-entry accounting (debit/credit). Balance lock (row-level SELECT FOR UPDATE). Payment gateway integration. Reconciliation jobs.

39. **Design a recommendation system.** *(checkcheckzz)*
    - Collaborative filtering (user-user, item-item). Content-based filtering (features). Matrix factorization. Real-time ML inference (feature store). A/B test framework.

40. **Design a dating app (like Tinder).** *(Expert addition)*
    - Geospatial search (Redis GEO, Elasticsearch). Card stack generation: filter + rank. Swipe: like/pass → matches table. Matching algorithm: ELO score, preference weights.

### 5.3 Key Concepts

36. **What are the "numbers everyone should know"?** *(checkcheckzz, Expert addition)*
    - L1 cache: 1ns. L2: 10ns. RAM: 100ns. SSD: 100μs. Disk seek: 10ms. Network (within DC): 0.5ms. Network (cross-region): 50-100ms.

37. **How do you estimate server capacity?** *(Expert addition)*
    - DAU → requests per second → storage per request → total storage → bandwidth → server count.

38. **How do you design for 10x growth?** *(Expert addition)*
    - Plan for sharding, caching, async processing, CDN, connection pooling, replication.

39. **What is the 80/20 rule in caching?** *(Expert addition)*
    - 80% of traffic hits 20% of data. Cache the hot data.

40. **How do you handle hot keys / hot partitions?** *(Expert addition)*
    - Replication, shard splitting, client-side caching, random suffixes.

---

## 6. Backend Engineering

### 6.1 General Backend

1.  **What is REST? What are the constraints?** *(Expert addition)*
    - Representational State Transfer. Constraints: Stateless, Client-Server, Cacheable, Uniform Interface, Layered System, Code on Demand (optional).

2.  **What are HTTP methods and their idempotency?** *(Expert addition)*
    - GET (safe/idempotent), PUT (idempotent), DELETE (idempotent), POST (neither), PATCH (neither).

3.  **What is the difference between authentication and authorization?** *(Expert addition)*
    - Authentication: who you are. Authorization: what you can do.

4.  **What is JWT? Structure?** *(Expert addition)*
    - JSON Web Token: Header.Payload.Signature. Stateless authentication.

5.  **What is OAuth 2.0?** *(Expert addition)*
    - Authorization framework. Grant types: Authorization Code, Implicit, Client Credentials, Password.

6.  **What are cookies vs sessions vs tokens?** *(Expert addition)*
    - Cookies: client-side storage. Sessions: server-side state. Tokens: self-contained credentials (JWT).

7.  **What is CORS?** *(Expert addition)*
    - Cross-Origin Resource Sharing. Browser mechanism allowing/restricting cross-origin requests.

8.  **What is SQL injection? How do you prevent it?** *(Expert addition)*
    - Malicious SQL in user input. Prevent with parameterized queries / prepared statements.

9.  **What is XSS and CSRF?** *(Expert addition)*
    - XSS: inject scripts into web pages. CSRF: forge requests from authenticated users.

10. **What are microservices? Pros/cons?** *(Expert addition)*
    - Independent deployable services. Pros: scalability, team autonomy. Cons: complexity, network overhead, debugging.

11. **What is a monolith vs microservices?** *(Expert addition)*
    - Monolith: single deployable unit. Microservices: distributed, independently deployable services.

12. **What is a circuit breaker?** *(Expert addition)*
    - Pattern preventing cascading failures. States: Closed, Open, Half-Open. Libraries: Hystrix, resilience4j.

13. **What is retry with exponential backoff?** *(Expert addition)*
    - Retry failed operations with increasing delays + jitter to avoid thundering herd.

14. **What is a health check endpoint?** *(Expert addition)*
    - `/health` or `/ready` endpoint. Liveness (is app running?) vs Readiness (can accept traffic?).

15. **What is a sidecar pattern?** *(Expert addition)*
    - Deploy a helper container alongside the main container. Common in service meshes.

16. **What is gRPC? When to use it?** *(Expert addition)*
    - High-perf RPC framework using HTTP/2 + Protocol Buffers. Good for internal services, streaming.

17. **What is GraphQL?** *(Expert addition)*
    - Query language for APIs. Clients specify what data they need. Reduces over-fetching.

18. **Explain database connection pooling.** *(Expert addition)*
    - Reuse connections instead of creating new ones. Improves latency, reduces server load.

19. **What is N+1 query problem?** *(Expert addition)*
    - Performing N additional queries for N results (e.g., fetching author for each post). Solve with eager loading / JOIN.

20. **What is migration strategy?** *(Expert addition)*
    - Blue-green deployment, canary release, rolling update, feature flags, database migration tools.

### 6.2 API Design

21. **What are best practices for RESTful API design?** *(Expert addition)*
    - Use nouns for resources, HTTP methods for actions, versioning (`/v1/`), pagination, consistent error format.

22. **What is HATEOAS?** *(Expert addition)*
    - Hypermedia as the Engine of Application State. API responses include links to related resources.

23. **What is idempotency key?** *(Expert addition)*
    - Unique key sent by client. Server deduplicates requests with same key. Crucial for payments.

24. **How do you version APIs?** *(Expert addition)*
    - URL path (`/v1/users`), header (`Accept: application/vnd.myapp.v1+json`), query param.

25. **What is rate limiting? What algorithms?** *(Expert addition)*
    - Token bucket, Leaky bucket, Fixed window, Sliding window log, Sliding window counter.

### 6.3 API Patterns & Protocols

21. **What is the difference between SOAP, REST, and GraphQL?**
    - SOAP: XML-based, rigid contracts, enterprise. REST: stateless, resources, HTTP verbs. GraphQL: client-driven queries, single endpoint, eliminates over/under-fetching.

22. **What is a webhook? How is it different from polling?**
    - Webhook: server pushes data to a URL when event occurs (event-driven). Polling: client repeatedly checks for updates. Webhooks are real-time, reduce load, but less reliable (need retries).

23. **What is SSE (Server-Sent Events)? When to use vs WebSockets?**
    - SSE: server pushes to client over HTTP (unidirectional). Lighter than WebSockets. Use for: live feeds, notifications, stock tickers. WebSockets for bidirectional communication.

24. **What is the difference between API Gateway and Load Balancer?**
    - API Gateway: routing, auth, rate limiting, request/response transformation, aggregation. Load Balancer: distributes traffic, health checks, SSL termination. Gateway works at app layer.

25. **What is the Backend-for-Frontend (BFF) pattern?**
    - Dedicated backend per client type (mobile, web, IoT). Each BFF handles client-specific concerns: data shaping, auth, caching. Avoids one-size-fits-all API.

### 6.4 Observability

26. **What is observability?** *(Expert addition)*
    - Ability to measure internal state by external outputs. Three pillars: Logging, Metrics, Tracing.

27. **What is structured logging?** *(Expert addition)*
    - Logs in machine-parseable format (JSON). Easy to query, correlate, analyze.

28. **What are the RED metrics?** *(Expert addition)*
    - Rate (requests/sec), Errors (failed requests), Duration (latency distribution).

29. **What are the USE metrics?** *(Expert addition)*
    - Utilization, Saturation, Errors (for resources like CPU, memory, disk, network).

30. **What is distributed tracing?** *(Expert addition)*
    - Trace a request across multiple services. Tools: Jaeger, OpenTelemetry, Zipkin.

### 6.5 Message Queues & Streaming

31. **What is Kafka? How does it work?**
    - Distributed event streaming platform. Topics → Partitions (ordered, immutable log). Producers publish to partitions. Consumers in consumer groups read with offset tracking.

32. **What is RabbitMQ? How does it differ from Kafka?**
    - Message broker (AMQP). Exchanges (direct, topic, fanout, headers) route messages to queues. Rabbit: smart broker, complex routing, immediate ACKs. Kafka: durable log, replay, high throughput.

33. **What is a consumer group in Kafka? How does rebalancing work?**
    - Group of consumers sharing a topic. Each partition assigned to one consumer. Rebalancing: consumer joins/leaves → partition re-assignment (stop-the-world until KIP-429).

34. **What are Kafka partitions and how do you choose the partition count?**
    - Partitions enable parallelism. Guidelines: partitions ≥ max concurrency needed. More partitions = more throughput, but also more file handles, rebalance time, leader overhead.

35. **What is at-least-once vs exactly-once semantics in Kafka?**
    - At-least-once: produce acks + retry (possible duplicates). Exactly-once: idempotent producer + transactional API. Exactly-once source/sink requires idempotent output operations.

36. **What is RabbitMQ dead letter exchange (DLX)?**
    - Queue messages that are rejected, expired, or exceed max length → DLX routes to dead letter queue. Critical for error handling, retry logic, message inspection.

37. **What is message ordering guarantee across partitions vs within a partition?**
    - Within a partition: order guaranteed (FIFO). Across partitions: no order guarantee. Use partition key (e.g., user_id) to maintain per-key ordering.

38. **What is backpressure? How do you handle it?**
    - Producer faster than consumer — buffer builds, memory fills, services crash. Solutions: bounded queues, drop/tail-truncate, apply backpressure (HTTP 429, TCP backpressure), reactive streams (RSocket).

39. **What is the difference between push-based and pull-based consumption?**
    - Push: broker sends to consumer (RabbitMQ). Pull: consumer requests from broker (Kafka). Pull: better backpressure, batching control. Push: lower latency for low-volume.

40. **What is a message schema registry? Why is it important?**
    - Central schema store for Avro/Protobuf/JSON Schema. Producer registers schema, consumer fetches schema. Enforces compatibility (forward/backward/full). Prevents deserialization errors.

---

## 7. Infrastructure & DevOps

1.  **What is Docker? How does it differ from a VM?** *(Expert addition)*
    - Docker uses containerization (OS-level virtualization). Shares host kernel. VMs have full OS per instance.

2.  **What is Kubernetes? Explain the architecture.** *(Expert addition)*
    - Container orchestration. Master: API server, etcd, scheduler, controller manager. Nodes: kubelet, kube-proxy, container runtime.

3.  **What is a Pod in Kubernetes?** *(Expert addition)*
    - Smallest deployable unit. One or more containers sharing network/storage.

4.  **What is a Deployment vs StatefulSet?** *(Expert addition)*
    - Deployment: stateless apps, scalable. StatefulSet: stateful apps, sticky identity, ordered deployment.

5.  **What is a Service in Kubernetes? Types?** *(Expert addition)*
    - Abstraction exposing pods. Types: ClusterIP, NodePort, LoadBalancer, ExternalName.

6.  **What is Helm?** *(Expert addition)*
    - Kubernetes package manager. Charts define, install, upgrade apps.

7.  **What is Terraform?** *(Expert addition)*
    - Infrastructure as Code tool. Declarative language (HCL). Manages cloud resources.

8.  **What is CI/CD?** *(Expert addition)*
    - Continuous Integration (automated build/test on merge). Continuous Delivery/Deployment.

9.  **What is GitHub Actions vs Jenkins vs GitLab CI?** *(Expert addition)*
    - All CI/CD tools. GitHub Actions: integrated with GitHub. Jenkins: highly customizable. GitLab CI: integrated with GitLab.

10. **What is monitoring vs alerting?** *(Expert addition)*
    - Monitoring: collecting metrics. Alerting: notifying when metrics breach thresholds.

11. **What is Prometheus?** *(Expert addition)*
    - Time-series monitoring. Pull-based model. Uses PromQL for queries.

12. **What is Grafana?** *(Expert addition)*
    - Visualization tool for metrics. Supports Prometheus, InfluxDB, Elasticsearch, etc.

13. **What is ELK stack?** *(Expert addition)*
    - Elasticsearch (search/analytics), Logstash (ingestion), Kibana (visualization).

14. **What is a reverse proxy vs forward proxy?** *(Expert addition)*
    - Reverse proxy: sits in front of servers (Nginx, HAProxy). Forward proxy: sits in front of clients.

15. **What is Nginx? Common use cases?** *(Expert addition)*
    - Web server, reverse proxy, load balancer, API gateway, SSL termination.

16. **What is a sidecar container?** *(Expert addition)*
    - Helper container alongside main container in a pod. Provides logging, proxying, monitoring.

17. **What is a ConfigMap vs Secret in Kubernetes?** *(Expert addition)*
    - ConfigMap: non-sensitive config. Secret: sensitive data (base64 encoded).

18. **What is a Horizontal Pod Autoscaler (HPA)?** *(Expert addition)*
    - Automatically scales pods based on CPU, memory, or custom metrics.

19. **What is a Persistent Volume (PV) and Persistent Volume Claim (PVC)?** *(Expert addition)*
    - PV: storage resource provisioned by admin. PVC: request for storage by user.

20. **What is a service mesh (Istio/Linkerd)?** *(Expert addition)*
    - Infrastructure layer for service-to-service communication. Provides traffic management, security, observability.

21. **What are Docker layers? How does the build cache work?**
    - Each Dockerfile instruction creates a read-only layer. Cache invalidated if parent layer changes or instruction changes. Order matters: put infrequent changes first.

22. **What is Docker multi-stage build? Why use it?**
    - Multiple FROM statements in one Dockerfile. Build stage with full toolchain, final stage with only runtime artifacts. Reduces image size (no build tools in final).

23. **What are Docker network drivers? Bridge vs Host vs Overlay?**
    - Bridge: default, isolated network for containers on same host. Host: container uses host network stack (no isolation). Overlay: multi-host networking for Swarm/K8s.

24. **What is a Kubernetes Ingress? How does it differ from a Service?**
    - Ingress: HTTP/HTTPS routing to services (host/path-based, SSL termination). Service: L4 load balancing. Ingress works at L7, needs an Ingress Controller (Nginx, Traefik, ALB).

25. **What are Kubernetes Network Policies?**
    - Firewall rules for pods. Controls ingress/egress traffic based on pod selectors, namespaces, IP blocks, ports. Default: all traffic allowed (enforce by enabling network policy).

26. **What is Kubernetes RBAC? Role vs ClusterRole, RoleBinding vs ClusterRoleBinding?**
    - Role: namespace-scoped permissions. ClusterRole: cluster-wide. RoleBinding: binds Role to user/service account in a namespace. ClusterRoleBinding: binds ClusterRole cluster-wide.

27. **What are Kubernetes Storage Classes? How does dynamic provisioning work?**
    - StorageClass defines provisioner, parameters (type, IOPS, replication). PVC references StorageClass, provisioner creates PV dynamically. Enables self-service storage.

28. **What are Kubernetes probes: liveness, readiness, startup?**
    - Liveness: restart pod if fails (checks if app is alive). Readiness: stop sending traffic if fails (checks if app can serve). Startup: slow-start apps delay liveness.

29. **What is a Kubernetes Operator?**
    - Custom controller managing complex stateful apps. Extends K8s API with custom resources. Examples: Prometheus Operator, Postgres Operator (Crunchy/StackGres), cert-manager.

30. **What are Pod Priority Classes and Pod Disruption Budgets?**
    - Priority: scheduling/preemption priority, higher priority pods can evict lower ones. PDB: minimum available pods during voluntary disruptions (node drain, rolling update).

31. **What is Istio sidecar injection? How does traffic routing work?**
    - Mutating webhook injects Envoy proxy sidecar. iptables rules redirect in/out traffic through proxy. VirtualService/DestinationRule control L7 routing.

32. **What is mTLS in Istio? How does it secure service communication?**
    - Mutual TLS between sidecars. Each proxy has certificate (SPIFFE identity). Automatic encryption and authentication. Can be set to permissive (allow plaintext) during migration.

33. **What is Helm? What are Charts, Values, Hooks, Dependencies?**
    - K8s package manager. Chart: template package. Values: config overrides. Hooks: pre/post-install/upgrade jobs. Dependencies: sub-charts.

34. **What is Terraform state? Why is it important?**
    - JSON mapping real-world resources to config. Stored locally or in remote backends (S3+ DynamoDB, Terraform Cloud). Enables plan/destroy, detects drift. Protect with state locking.

35. **What are Terraform modules vs workspaces?**
    - Module: reusable config group (infrastructure building blocks). Workspace: separate state for same config (dev/staging/prod). Modules for reuse, workspaces for environment isolation.

36. **How does Prometheus service discovery work?**
    - Scrape targets discovered dynamically: Kubernetes (pod/service annotations), Consul, EC2, file-based, DNS. Relabeling filters/configures target metadata.

37. **What is PromQL `rate` vs `increase` vs `irate`?**
    - `rate`: per-second average over time (use for slow-moving counters). `increase`: total increase over time. `irate`: instant per-second rate (last two samples, sensitive to spikes).

38. **What is Grafana? Dashboard variables and annotations?**
    - Visualization platform. Variables: templated queries for dashboard filtering. Annotations: events overlaid on graphs (deployments, alerts).

39. **What is the ELK stack? How do logstash grok patterns work?**
    - Elasticsearch (storage/search), Logstash (parsing), Kibana (visualization). Grok: regex-based pattern matching for unstructured logs (%{IP:client}, %{WORD:method}).

40. **What is HashiCorp Vault? What are dynamic secrets?**
    - Secrets management: store, access, rotate secrets. Dynamic secrets: generate credentials on-demand (DB creds, AWS IAM), TTL-based, auto-revoked.

41. **What is Docker Compose? When to use vs Kubernetes?**
    - Multi-container Docker orchestration on single host. Use for local dev, CI, simple deployments. K8s for production, multi-host, auto-scaling, self-healing.

42. **What are Kubernetes admission controllers?**
    - Intercept requests to API server after auth but before persistence. Mutating (modify resources, e.g., inject sidecar) and Validating (enforce policies, e.g., PodSecurity).

43. **What is a Kubernetes custom resource definition (CRD)?**
    - Extend K8s API with custom resources. Combined with controller → Operator pattern. CRD stores data, controller observes/reconciles.

44. **What is a Kubernetes DaemonSet? When to use?**
    - Runs pod on every node. Use for: logging agents (Fluentd), monitoring agents (Prometheus node_exporter), network plugins (Calico), node problem detector.

45. **What is a Kubernetes Job vs CronJob?**
    - Job: runs one or more pods to completion. CronJob: scheduled Jobs (like cron). Use for batch processing, backups, scheduled tasks.

46. **What is a Kubernetes ConfigMap vs Secret volume mount vs env var?**
    - Volume mount: file-based, auto-update (except subPath). Env var: static at pod start, no update. Volume preferred for config that needs rotation without pod restart.

47. **What is Pod Anti-Affinity? Why use it?**
    - Prevents pods from scheduling on same node. `podAntiAffinity: requiredDuringScheduling`. Used for availability: spread replicas across nodes, zones.

48. **What is the Kubernetes scheduler? How does it work?**
    - Assigns pods to nodes. Filtering (node resources, constraints, taints) → Scoring (least requested, most balanced, spread). Pluggable scheduling policies.

49. **What is Terraform `count` vs `for_each`?**
    - `count`: create N resources (indexed). `for_each`: create from map/set (keyed). Prefer `for_each` for non-identical resources — count creates/destroys all on index shift.

50. **What is Terraform `terraform plan` vs `terraform apply` vs `terraform destroy`?**
    - Plan: show changes without applying. Apply: execute changes. Destroy: tear down all managed resources. Always review plan output before apply.

51. **What is Docker HEALTHCHECK?**
    - Instruction telling Docker how to test if container is healthy. Three states: starting, healthy, unhealthy. Triggers `restart: always` on unhealthy.

52. **What is Docker multi-architecture build?**
    - Build for multiple platforms (linux/amd64, linux/arm64). Use `docker buildx` + QEMU emulation or cross-compilation. Registry stores manifest list.

53. **What is Prometheus Alertmanager? How do grouping and inhibition work?**
    - Routes alerts, deduplicates, groups (same alert type → single notification). Inhibition: suppress low-severity alerts when higher-severity fires (e.g., "server down" suppresses "disk full").

54. **What is a readiness check vs liveness check in cloud-native apps?**
    - Readiness: app is ready to serve traffic (fail → no traffic sent). Liveness: app is alive (fail → restart). Readiness for startup/dependency availability, liveness for deadlock/crash.

55. **What is Fluentd vs Logstash vs Vector?**
    - All log collectors. Fluentd: mature, plugins, buffering. Logstash: ELK native, heavier. Vector: Rust, high-perf, lowest resource usage, newer.

---

## 8. Object-Oriented Programming (OOPs)

1.  **What are the four pillars of OOP?** *(Universal)*
    - Encapsulation, Inheritance, Polymorphism, Abstraction.

2.  **Explain Encapsulation.** *(Universal)*
    - Bundling data and methods. Hiding internal state. Achieved via access modifiers (private, protected, public).

3.  **Explain Inheritance.** *(Universal)*
    - A class derives properties and behavior from a parent class. Supports code reuse.

4.  **Explain Polymorphism.** *(Universal)*
    - Many forms. Compile-time (method overloading) and runtime (method overriding).

5.  **Explain Abstraction.** *(Universal)*
    - Hiding implementation details, exposing only essential features. Achieved via abstract classes/interfaces.

6.  **What is the difference between composition and inheritance?** *(Universal)*
    - Inheritance: "is-a" relationship. Composition: "has-a" relationship. Favor composition over inheritance.

7.  **What is an abstract class?** *(Universal)*
    - Cannot be instantiated. May have abstract and concrete methods. Provides a partial implementation.

8.  **What is an interface?** *(Universal)*
    - Contract defining methods that implementing classes must provide. 100% abstract (in many languages).

9.  **What is method overloading vs overriding?** *(Universal)*
    - Overloading: same name, different parameters (compile-time). Overriding: same signature, different implementation (runtime).

10. **What is a constructor?** *(Universal)*
    - Special method called when an object is instantiated. Initializes state.

11. **What is a virtual function?** *(Universal)*
    - A function that can be overridden in a derived class. C++ uses `virtual`. Python/Go: all methods are virtual.

12. **What is the diamond problem?** *(OOPs specific)*
    - Ambiguity from multiple inheritance. Two base classes have same method. Solved via virtual inheritance (C++) or MRO (Python).

13. **What is the SOLID principle?** *(Universal)*
    - S: Single Responsibility. O: Open/Closed. L: Liskov Substitution. I: Interface Segregation. D: Dependency Inversion.

14. **Explain Single Responsibility Principle.** *(Expert addition)*
    - A class should have only one reason to change.

15. **Explain Open/Closed Principle.** *(Expert addition)*
    - Open for extension, closed for modification.

16. **Explain Liskov Substitution Principle.** *(Expert addition)*
    - Subtypes must be substitutable for their base types.

17. **Explain Interface Segregation Principle.** *(Expert addition)*
    - Clients should not depend on interfaces they don't use.

18. **Explain Dependency Inversion Principle.** *(Expert addition)*
    - Depend on abstractions, not concretions.

19. **What is a design pattern? Name some categories.** *(Expert addition)*
    - Creational (Singleton, Factory, Builder), Structural (Adapter, Proxy, Decorator), Behavioral (Observer, Strategy, Command).

20. **What is the Singleton pattern? What are its disadvantages?** *(Expert addition)*
    - Ensures a class has only one instance. Disadvantages: global state, difficult to test, hides dependencies.

21. **What is association, aggregation, and composition?**
    - Association: "uses-a" (general relationship). Aggregation: "has-a" (child can exist without parent, e.g. Department → Professor). Composition: "part-of" (child has no independent existence, e.g. House → Room).

22. **What is the Law of Demeter (principle of least knowledge)?**
    - A unit should only talk to its immediate friends. Don't chain: `obj.getA().getB().doC()`. Reduces coupling, improves maintainability.

23. **What is Dependency Injection? How does it relate to Inversion of Control?**
    - DI: dependencies provided externally (via constructor, setter, interface). IoC: control flow inverted (framework calls your code). DI is a form of IoC.

24. **What is a factory method vs abstract factory pattern?**
    - Factory Method: single method to create objects of one family (subclass decides). Abstract Factory: interface for creating families of related objects.

25. **What is the Builder pattern? When is it better than a constructor?**
    - Separates construction from representation. Better than telescoping constructors (many params), improves readability for complex objects with many optional fields.

26. **What is the Adapter vs Facade vs Proxy pattern?**
    - Adapter: converts interface (makes things work together). Facade: simplifies interface (provides unified surface). Proxy: controls access (lazy loading, access control, logging).

27. **What is the Decorator pattern vs inheritance?**
    - Decorator: wraps object at runtime to add behavior (composition). Inheritance: adds behavior at compile time. Decorator is more flexible (combine multiple, avoids class explosion).

28. **What is the Observer pattern? How does Pub/Sub differ?**
    - Observer: subject notifies observers directly (one-to-many). Pub/Sub: message broker between publishers and subscribers (fully decoupled).

29. **What is the Strategy pattern? When would you use it?**
    - Encapsulates interchangeable algorithms. Eliminates complex conditionals. Example: payment processing (credit card, PayPal, crypto).

30. **What is the Command pattern?**
    - Encapsulates request as an object. Enables undo/redo, queuing, logging, transactional behavior.

31. **What is the State pattern vs Strategy pattern?**
    - Both use composition + polymorphism. State: behavior changes based on internal state (state transitions). Strategy: algorithm selected by client.

32. **What is the Template Method pattern?**
    - Defines skeleton of algorithm in base class, subclasses override specific steps.

33. **What is the Composite pattern?**
    - Treats individual objects and compositions uniformly. Tree structure: Leaf + Composite. Used in UI components, file systems.

34. **What is the Null Object pattern?**
    - Provides a default no-op object implementing the interface. Eliminates null checks.

35. **What is a Repository pattern?**
    - Collection-like interface for domain objects. Abstracts data access, returns aggregates. Commonly used with Unit of Work.

36. **What is the difference between Active Record and Data Mapper?**
    - Active Record: object wraps DB row, saves itself. Data Mapper: object is pure domain, persistence separate.

37. **What is composition over inheritance? When do you still use inheritance?**
    - Composition: more flexible, runtime replacement. Inheritance: IS-A relationship, code reuse for genuinely shared behavior.

38. **What is the Open/Closed principle in practice?**
    - Favor extension via composition (Strategy, Decorator) over modification. Use polymorphism instead of conditionals.

39. **What is the Liskov Substitution Principle? Show a violation.**
    - Subtypes must be substitutable for base types. Violation: `Square extends Rectangle` — changing width affects height differently.

40. **What is a value object vs entity?**
    - Value Object: immutable, defined by attributes (Money). Entity: mutable, defined by identity (Person with ID).

---

## 9. Data Structures & Algorithms

### 9.1 Arrays & Strings

1.  **Two Sum** — return indices of two numbers that sum to target. *(LeetCode #1, InterviewBit)*
2.  **Valid Parentheses** — check if bracket string is balanced. *(LeetCode #20, InterviewBit)*
3.  **Longest Substring Without Repeating Characters** — sliding window. *(LeetCode #3, InterviewBit)*
4.  **Merge Intervals** — merge overlapping intervals. *(LeetCode #56, InterviewBit)*
5.  **First Non-Repeating Character** — find first unique char. *(LeetCode #387, InterviewBit)*
6.  **Group Anagrams** — group anagram strings. *(LeetCode #49, InterviewBit)*
7.  **Top K Frequent Elements** — heap/quickselect. *(LeetCode #347, InterviewBit)*
8.  **Product of Array Except Self** — O(n) without division. *(LeetCode #238)*
9.  **Maximum Subarray (Kadane's Algorithm)** — max sum subarray. *(LeetCode #53)*
10. **Container With Most Water** — two pointers. *(LeetCode #11)*

### 9.2 Linked Lists

11. **Reverse a Linked List** *(LeetCode #206)*
12. **Detect Cycle in Linked List** — Floyd's slow/fast pointer. *(LeetCode #141, InterviewBit)*
13. **Merge Two Sorted Lists** *(LeetCode #21)*
14. **Remove Nth Node From End of List** *(LeetCode #19)*
15. **LRU Cache** — hash map + doubly linked list. *(LeetCode #146, InterviewBit)*

### 9.3 Trees & Graphs

16. **Binary Tree Level Order Traversal** — BFS. *(LeetCode #102, InterviewBit)*
17. **Binary Tree Maximum Path Sum** *(LeetCode #124)*
18. **Validate Binary Search Tree** *(LeetCode #98)*
19. **Lowest Common Ancestor of BST** *(LeetCode #235)*
20. **Invert Binary Tree** *(LeetCode #226)*
21. **Serialize and Deserialize Binary Tree** *(LeetCode #297)*
22. **Word Ladder** — BFS. *(LeetCode #127)*
23. **Number of Islands** — DFS/BFS. *(LeetCode #200)*
24. **Course Schedule** — topological sort. *(LeetCode #207)*
25. **Clone Graph** *(LeetCode #133)*

### 9.4 Dynamic Programming

26. **Climbing Stairs** *(LeetCode #70)*
27. **Coin Change** *(LeetCode #322)*
28. **Longest Common Subsequence** *(LeetCode #1143)*
29. **Longest Increasing Subsequence** *(LeetCode #300)*
30. **0/1 Knapsack** *(Classic)*
31. **Edit Distance** *(LeetCode #72)*
32. **House Robber** *(LeetCode #198)*
33. **Maximum Product Subarray** *(LeetCode #152)*
34. **Palindrome Partitioning** *(LeetCode #131)*
35. **Decode Ways** *(LeetCode #91)*

### 9.5 Sorting & Searching

36. **Binary Search** *(LeetCode #704)*
37. **Search in Rotated Sorted Array** *(LeetCode #33)*
38. **Find First and Last Position of Element** *(LeetCode #34)*
39. **Kth Largest Element in Array** — heap/quickselect. *(LeetCode #215)*
40. **Find Minimum in Rotated Sorted Array** *(LeetCode #153)*
41. **Merge Sort** — implement.
42. **Quick Sort** — implement.
43. **Heap Sort** — implement.
44. **Sort Colors (Dutch Flag)** *(LeetCode #75)*
45. **Median of Two Sorted Arrays** *(LeetCode #4)*

### 9.6 Design & Others

46. **Design a Trie (Prefix Tree)** *(LeetCode #208)*
47. **Design Add and Search Words Data Structure** *(LeetCode #211)*
48. **Implement a Min Stack** *(LeetCode #155)*
49. **LRU Cache** *(LeetCode #146)*
50. **LFU Cache** *(LeetCode #460)*

### 9.7 Conceptual DSA Questions

51. **What is the difference between an array and a linked list?**
    - Array: O(1) random access, contiguous memory, expensive insert/delete (O(n)). Linked list: O(n) access, non-contiguous, O(1) insert/delete if you have the node pointer.

52. **How do hash tables handle collisions? Compare chaining vs open addressing.**
    - Chaining: each bucket has a linked list/tree. Open addressing: probe for empty slot (linear, quadratic, double hashing). Chaining simpler, open addressing more cache-friendly.

53. **What is load factor? How does it affect hash table performance?**
    - ratio = (items / buckets). Higher load factor → more collisions → worse performance. Typical thresholds: 0.75 (Java HashMap), 0.5 for open addressing. Triggers resize.

54. **What is a binary heap? What are its uses?**
    - Complete binary tree, heap property (parent ≥ children for max-heap). Uses: priority queue (O(log n) insert/delete), heap sort (O(n log n)), Dijkstra's algorithm.

55. **When would you choose BFS vs DFS?**
    - BFS: shortest path in unweighted graph, level-order traversal, finds minimum steps. DFS: path existence, topological sort, connected components, less memory (stack vs queue).

56. **What are the trade-offs between a balanced BST and a hash table?**
    - BST: ordered, range queries, O(log n) guaranteed. Hash table: O(1) average, no ordering, no range queries, vulnerable to hash collision attacks.

57. **What is a Red-Black Tree vs AVL Tree?**
    - RB: relaxed balancing (2x height max), fewer rotations, better for inserts/deletes. AVL: stricter balance (1.44x), more rotations, better for read-heavy workloads.

58. **What is a Trie? What are its use cases?**
    - Prefix tree. Use cases: autocomplete, spell check, IP routing (longest prefix match), dictionary word lookup. Space-heavy but O(L) lookup for strings.

59. **What is a Bloom Filter? What are false positives?**
    - Probabilistic data structure using k hash functions + bitset. "Definitely not in set" vs "maybe in set". False positives possible (tunable), false negatives impossible.

60. **What is the sliding window technique? When is it used?**
    - Maintains a window over array/string, expands/shrinks based on condition. Used for: maximum sum subarray of size K, longest substring without repeating chars. O(n) time.

61. **What is the two-pointer technique? Examples?**
    - Two pointers moving through data structure. Types: opposite ends (two-sum sorted), same direction (remove duplicates, sliding window), fast-slow (cycle detection).

62. **What is recursion vs iteration? When is one preferred?**
    - Recursion: elegant for divide-and-conquer, tree traversal, backtracking. Risk: stack overflow for deep recursion. Iteration: explicit control, no function call overhead.

63. **What is topological sort? What graph properties are required?**
    - Linear ordering of DAG where edges go from earlier to later. Used for: task scheduling, build dependencies, course prerequisites. Algorithms: Kahn's (BFS), DFS with post-order.

64. **What is Dijkstra vs Bellman-Ford vs Floyd-Warshall?**
    - Dijkstra: single-source, non-negative weights only, O(E log V). Bellman-Ford: handles negative weights, detects negative cycles, O(VE). Floyd-Warshall: all-pairs, O(V³).

65. **What is dynamic programming? Overlapping subproblems and optimal substructure?**
    - DP solves problems by combining solutions to subproblems. Overlapping subproblems: same subproblem reused. Optimal substructure: optimal solution from optimal sub-solutions.

66. **What is greedy vs dynamic programming? Give an example of where greedy fails.**
    - Greedy: locally optimal choice at each step (may not lead to global optimum). Example where greedy fails: 0/1 knapsack (greedy by value/weight fails). DP works when greedy fails.

67. **What is a minimum spanning tree? Prim vs Kruskal?**
    - MST connects all vertices with minimum total edge weight. Prim: grows from a vertex, O(E log V), better for dense graphs. Kruskal: sorts edges, union-find, O(E log E), better for sparse.

68. **What is Union-Find (Disjoint Set)? Path compression and union by rank?**
    - Data structure for tracking elements partitioned into disjoint sets. Path compression: flattens tree on find. Union by rank: attach smaller tree to larger. Near O(α(n)) amortized.

69. **What is KMP string matching? What is the prefix function?**
    - O(n+m) string matching. Prefix function (pi): length of longest proper prefix matching suffix. Skips unnecessary comparisons by using previously matched prefixes.

70. **What is Moore's Voting Algorithm?**
    - Finds majority element (> n/2) in O(n) time and O(1) space. Paired cancellation: different elements cancel each other. Requires verification pass.

71. **What is a monotonic stack? Example use?**
    - Stack maintaining increasing/decreasing order. Used for: next greater element, largest rectangle in histogram, trapping rain water. O(n) where brute-force is O(n²).

72. **What is the Segment Tree vs Fenwick Tree (BIT)?**
    - Segment tree: range queries + point/range updates, any associative operation, O(log n), 4n space. Fenwick: prefix sums only, faster constant factor, simpler, n space.

73. **What is Floyd's Cycle Detection (Tortoise and Hare)?**
    - Two pointers, one moving twice as fast. If they meet, cycle exists. Finding cycle start: reset one pointer to head, move both at same speed until they meet.

74. **What is Kadane's Algorithm?**
    - Maximum subarray sum in O(n). Maintains `current_max` (max ending here) and `global_max`. If `current_max` becomes negative, reset to 0 (or current element).

75. **What is the Sieve of Eratosthenes? Complexity?**
    - Finds all primes up to N. Mark multiples of each prime, starting from 2. Complexity O(n log log n), memory O(n). Optimizations: start from p², iterate step 2p.

76. **What is Reservoir Sampling? When would you use it?**
    - Randomly selects k items from a stream of unknown length. O(n) time, O(k) space. Each element has probability k/n of being selected. Used in load balancing, data shuffling.

77. **What is counting sort vs radix sort vs bucket sort? When is each useful?**
    - Counting: small integer ranges, O(n+k). Radix: sort by digit, O(w·n) for w-digit numbers. Bucket: uniform distribution, O(n) average. All linear-time non-comparison sorts.

78. **What is external sorting? How is it done?**
    - Sorting data too large for RAM. Phase 1: sort chunks (runs), write to disk. Phase 2: merge runs (k-way merge). Used in DBMS for large result sets.

79. **What is the Boyer-Moore majority vote algorithm generalization?**
    - Can find elements appearing > n/k times. Maintain k-1 candidate slots. Cancel pairs of different elements. Requires verification. O(n·k) time.

80. **What is meet-in-the-middle? When is it used?**
    - Splits problem into two halves, solves each, combines results. Reduces exponential complexity from O(2ⁿ) to O(2ⁿᐟ²). Used in subset sum, knapsack, cryptanalysis.

### 9.8 Striver's A2Z DSA Sheet

#### Arrays - Easy
81. **Largest Element** [Medium]
    -
82. **Second Largest Element** [Medium]
    -
83. **Check if the Array is Sorted II** [Medium]
    - https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
84. **Remove duplicates from Sorted array** [Medium]
    - https://leetcode.com/problems/remove-duplicates-from-sorted-array/
85. **Left Rotate Array by One** [Medium]
    - https://leetcode.com/problems/rotate-array/
86. **Left Rotate Array by K Places** [Medium]
    - https://leetcode.com/problems/rotate-array/
87. **Move Zeros to End** [Medium]
    - https://leetcode.com/problems/move-zeroes/
88. **Linear Search** [Medium]
    -
89. **Union of two sorted arrays** [Medium]
    -
90. **Find missing number** [Medium]
    -
91. **Maximum Consecutive Ones** [Medium]
    - https://leetcode.com/problems/max-consecutive-ones/
92. **Find the number that appears once, and other numbers twice.** [Medium]
    - https://leetcode.com/problems/single-number/
93. **Longest subarray with given sum K(positives)** [Medium]
    -
94. **Longest subarray with sum K** [Medium]
    -

#### Arrays - Medium
95. **Two Sum** [Medium]
    - https://leetcode.com/problems/two-sum/
96. **Sort an array of 0's 1's and 2's** [Medium]
    - https://leetcode.com/problems/sort-colors/
97. **Majority Element-I** [Medium]
    - https://leetcode.com/problems/majority-element/
98. **Kadane's Algorithm, maximum subarray sum** [Medium]
    - https://leetcode.com/problems/maximum-subarray/
99. **Print subarray with maximum subarray sum (extended version of above problem)** [Medium]
    -
100. **Stock Buy and Sell** [Medium]
    - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
101. **Rearrange array elements by sign** [Medium]
    - https://leetcode.com/problems/rearrange-array-elements-by-sign/
102. **Next Permutation** [Medium]
    - https://leetcode.com/problems/next-permutation/
103. **Leaders in an Array** [Medium]
    -
104. **Longest Consecutive Sequence in an Array** [Medium]
    - https://leetcode.com/problems/longest-consecutive-sequence/solution/
105. **Set Matrix Zeroes** [Medium]
    - https://leetcode.com/problems/set-matrix-zeroes/
106. **Rotate matrix by 90 degrees** [Medium]
    - https://leetcode.com/problems/rotate-image/
107. **Print the matrix in spiral manner** [Medium]
    - https://leetcode.com/problems/spiral-matrix/
108. **Count subarrays with given sum** [Medium]
    - https://leetcode.com/problems/subarray-sum-equals-k/

#### Arrays - Hard
109. **Pascal's Triangle I** [Medium]
    - https://leetcode.com/problems/pascals-triangle/
110. **Majority Element-II** [Medium]
    - https://leetcode.com/problems/majority-element-ii/
111. **3 Sum** [Medium]
    - https://leetcode.com/problems/3sum/
112. **4 Sum** [Medium]
    - https://leetcode.com/problems/4sum/
113. **Largest Subarray with Sum 0** [Medium]
    -
114. **Count subarrays with given xor K** [Medium]
    -
115. **Merge Overlapping Subintervals** [Medium]
    - https://leetcode.com/problems/merge-intervals/
116. **Merge two sorted arrays without extra space** [Medium]
    - https://leetcode.com/problems/merge-sorted-array/
117. **Find the repeating and missing number** [Medium]
    -
118. **Count Inversions** [Medium]
    -
119. **Reverse Pairs** [Medium]
    - https://leetcode.com/problems/reverse-pairs/
120. **Maximum Product Subarray in an Array** [Medium]
    - https://leetcode.com/problems/maximum-product-subarray/

#### Binary Search - BS on 1D Arrays
121. **Search X in sorted array** [Medium]
    - https://leetcode.com/problems/binary-search/
122. **Lower Bound** [Medium]
    -
123. **Upper Bound** [Medium]
    -
124. **Search insert position** [Medium]
    - https://leetcode.com/problems/search-insert-position/
125. **Floor and Ceil in Sorted Array** [Medium]
    -
126. **First and last occurrence** [Medium]
    - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
127. **Count Occurrences in a Sorted Array** [Medium]
    -
128. **Search in rotated sorted array-I** [Medium]
    - https://leetcode.com/problems/search-in-rotated-sorted-array/
129. **Search in rotated sorted array-II** [Medium]
    - https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
130. **Find minimum in Rotated Sorted Array** [Medium]
    - https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
131. **Find out how many times the array is rotated** [Medium]
    -
132. **Single element in a Sorted Array** [Medium]
    - https://leetcode.com/problems/single-element-in-a-sorted-array/
133. **Find peak element** [Medium]
    - https://leetcode.com/problems/find-peak-element/

#### Binary Search - BS on 2D Arrays
134. **Find row with maximum 1's** [Medium]
    -
135. **Search in a 2D matrix** [Medium]
    - https://leetcode.com/problems/search-a-2d-matrix/
136. **Search in 2D matrix - II** [Medium]
    - https://leetcode.com/problems/search-a-2d-matrix-ii/
137. **Find Peak Element - II** [Medium]
    - https://leetcode.com/problems/find-a-peak-element-ii/
138. **Matrix Median** [Medium]
    -

#### Binary Search - BS on Answers
139. **Find square root of a number** [Medium]
    -
140. **Find Nth root of a number** [Medium]
    -
141. **Koko eating bananas** [Medium]
    - https://leetcode.com/problems/koko-eating-bananas/
142. **Minimum days to make M bouquets** [Medium]
    - https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
143. **Find the smallest divisor** [Medium]
    - https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
144. **Capacity to Ship Packages Within D Days** [Medium]
    - https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
145. **Kth Missing Positive Number** [Medium]
    - https://leetcode.com/problems/kth-missing-positive-number/
146. **Aggressive Cows** [Medium]
    -
147. **Book Allocation Problem** [Medium]
    -
148. **Split array - largest sum** [Medium]
    - https://leetcode.com/problems/split-array-largest-sum/
149. **Painter's Partition** [Medium]
    -
150. **Minimize Max Distance to Gas Station** [Medium]
    - https://leetcode.com/problems/minimize-max-distance-to-gas-station/
151. **Median of 2 sorted arrays** [Medium]
    - https://leetcode.com/problems/median-of-two-sorted-arrays/
152. **Kth element of 2 sorted arrays** [Medium]
    -

#### Strings - Basic and Easy String Problems
153. **Remove Outermost Parentheses** [Medium]
    - https://leetcode.com/problems/remove-outermost-parentheses/
154. **Reverse words in a given string / Palindrome Check** [Medium]
    - https://leetcode.com/problems/reverse-words-in-a-string/
155. **Largest Odd Number in a String** [Medium]
    - https://leetcode.com/problems/largest-odd-number-in-string/
156. **Longest Common Prefix** [Medium]
    - https://leetcode.com/problems/longest-common-prefix/
157. **Isomorphic String** [Medium]
    - https://leetcode.com/problems/isomorphic-strings/
158. **Rotate String** [Medium]
    - https://leetcode.com/problems/rotate-string/
159. **Check if two strings are anagram of each other** [Medium]
    - https://leetcode.com/problems/valid-anagram/

#### Strings - Medium String Problems
160. **Sort Characters by Frequency** [Medium]
    - https://leetcode.com/problems/sort-characters-by-frequency/
161. **Maximum Nesting Depth of the Parentheses** [Medium]
    - https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
162. **Roman to Integer** [Medium]
    - https://leetcode.com/problems/roman-to-integer/
163. **String to Integer (atoi)** [Medium]
    - https://leetcode.com/problems/string-to-integer-atoi/
164. **Longest Palindromic Substring** [Medium]
    - https://leetcode.com/problems/longest-palindromic-substring/
165. **Sum of Beauty of All Substrings** [Medium]
    - https://leetcode.com/problems/sum-of-beauty-of-all-substrings/
166. **Reverse every word in a string** [Medium]
    - https://leetcode.com/problems/reverse-words-in-a-string/

#### Linked List - Learn 1D LinkedList
167. **Introduction to Singly LinkedList** [Medium]
    -
168. **Insertion at the head of Linked List** [Medium]
    -
169. **Deletion of the head of LL** [Medium]
    - https://leetcode.com/problems/delete-node-in-a-linked-list/
170. **Find the length of the Linked List** [Medium]
    -
171. **Search in Linked List** [Medium]
    -

#### Linked List - Learn Doubly LinkedList
172. **Introduction to Doubly LL** [Medium]
    -
173. **Insert node before head in Doubly Linked List** [Medium]
    -
174. **Delete head of Doubly Linked List** [Medium]
    -
175. **Reverse a Doubly Linked List** [Medium]
    -

#### Linked List - Medium Problems of LL
176. **Middle of a LinkedList [TortoiseHare Method]** [Medium]
    - https://leetcode.com/problems/middle-of-the-linked-list/
177. **Reverse a LinkedList [Iterative]** [Medium]
    - https://leetcode.com/problems/reverse-linked-list/
178. **Reverse a LL** [Medium]
    - https://leetcode.com/problems/reverse-linked-list/
179. **Detect a loop in LL** [Medium]
    - https://leetcode.com/problems/linked-list-cycle/
180. **Find the starting point in LL** [Medium]
    - https://leetcode.com/problems/linked-list-cycle-ii/
181. **Length of loop in LL** [Medium]
    -
182. **Check if LL is palindrome or not** [Medium]
    - https://leetcode.com/problems/palindrome-linked-list/
183. **Segregate odd and even nodes in Linked List** [Medium]
    - https://leetcode.com/problems/odd-even-linked-list/
184. **Remove Nth node from the back of the LL** [Medium]
    - https://leetcode.com/problems/remove-nth-node-from-end-of-list/
185. **Delete the middle node in LL** [Medium]
    - https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
186. **Sort LL** [Medium]
    - https://leetcode.com/problems/sort-list/
187. **Sort a Linked List of 0's 1's and 2's** [Medium]
    -
188. **Find the intersection point of Y LL** [Medium]
    - https://leetcode.com/problems/intersection-of-two-linked-lists/
189. **Add one to a number represented by LL** [Medium]
    -
190. **Add two numbers in Linked List** [Medium]
    - https://leetcode.com/problems/add-two-numbers/

#### Linked List - Medium Problems of DLL
191. **Delete all occurrences of a key in DLL** [Medium]
    -
192. **Find Pairs with Given Sum in Doubly Linked List** [Medium]
    -
193. **Remove duplicated from sorted DLL** [Medium]
    -

#### Linked List - Hard Problems of LL
194. **Reverse LL in group of given size K** [Medium]
    - https://leetcode.com/problems/reverse-nodes-in-k-group/
195. **Rotate a LL** [Medium]
    - https://leetcode.com/problems/rotate-list/description/
196. **Flattening of LL** [Medium]
    -
197. **Clone a LL with random and next pointer** [Medium]
    - https://leetcode.com/problems/copy-list-with-random-pointer/

#### Recursion - Learn Basic Recursion
198. **Print 1 to N using Recursion** [Medium]
    -
199. **Print N to 1 using Recursion** [Medium]
    -
200. **Sum of First N Numbers** [Medium]
    -
201. **Factorial of a given number** [Medium]
    -
202. **Reverse an array** [Medium]
    -
203. **Check if String is Palindrome or Not** [Medium]
    - https://leetcode.com/problems/valid-palindrome/
204. **Fibonacci Number** [Medium]
    - https://leetcode.com/problems/fibonacci-number/

#### Recursion - Get a Strong Hold
205. **Recursive Implementation of atoi()** [Medium]
    - https://leetcode.com/problems/string-to-integer-atoi/
206. **Pow(x, n)** [Medium]
    - https://leetcode.com/problems/powx-n/
207. **Count Good Numbers** [Medium]
    - https://leetcode.com/problems/count-good-numbers/
208. **Sort a stack using recursion** [Medium]
    -
209. **Reverse a Stack** [Medium]
    -

#### Recursion - Subsequences Pattern
210. **Generate Binary Strings Without Consecutive 1s** [Medium]
    -
211. **Generate Parentheses** [Medium]
    - https://leetcode.com/problems/generate-parentheses/
212. **Power Set** [Medium]
    -
213. **Count all subsequences with sum K** [Medium]
    -
214. **Check if there exists a subsequence with sum K** [Medium]
    -
215. **Combination Sum** [Medium]
    - https://leetcode.com/problems/combination-sum/
216. **Combination Sum II** [Medium]
    - https://leetcode.com/problems/combination-sum-ii/
217. **Subsets I** [Medium]
    -
218. **Subsets II** [Medium]
    - https://leetcode.com/problems/subsets-ii/
219. **Combination Sum III** [Medium]
    - https://leetcode.com/problems/combination-sum-iii/
220. **Letter Combinations of a Phone Number** [Medium]
    - https://leetcode.com/problems/letter-combinations-of-a-phone-number/

#### Recursion - Trying out all Combos / Hard
221. **Palindrome partitioning** [Medium]
    -
222. **Word Search** [Medium]
    - https://leetcode.com/problems/word-search/
223. **N Queen** [Medium]
    - https://leetcode.com/problems/n-queens/
224. **Rat in a Maze** [Medium]
    -
225. **Word Break** [Medium]
    -
226. **M Coloring Problem** [Medium]
    -
227. **Sudoku Solver** [Medium]
    - https://leetcode.com/problems/sudoku-solver/
228. **Expression Add Operators** [Medium]
    - https://leetcode.com/problems/expression-add-operators/

#### Stack and Queue - Learning
229. **Implement Stack using Arrays** [Medium]
    -
230. **Implement Queue using Arrays** [Medium]
    -
231. **Implement Stack using Queue** [Medium]
    - https://leetcode.com/problems/implement-stack-using-queues/
232. **Implement Queue using Stack** [Medium]
    - https://leetcode.com/problems/implement-queue-using-stacks/
233. **Implement stack using Linkedlist** [Medium]
    -
234. **Implement queue using Linkedlist** [Medium]
    -
235. **Balanced Paranthesis** [Medium]
    - https://leetcode.com/problems/valid-parentheses/
236. **Implement Min Stack** [Medium]
    - https://leetcode.com/problems/min-stack/

#### Stack and Queue - Prefix, Infix, PostFix Conversion Problems
237. **Infix to Postfix Conversion** [Medium]
    -
238. **Prefix to Infix Conversion** [Medium]
    -
239. **Prefix to Postfix Conversion** [Medium]
    -
240. **Postfix to Prefix Conversion** [Medium]
    -
241. **Postfix to Infix Conversion** [Medium]
    -
242. **Infix to Prefix Conversion** [Medium]
    -

#### Stack and Queue - Monotonic Stack/Queue Problems [VVV. Imp]
243. **Next Greater Element** [Medium]
    - https://leetcode.com/problems/next-greater-element-i/
244. **Next Greater Element - 2** [Medium]
    - https://leetcode.com/problems/next-greater-element-ii/
245. **Next Smaller Element** [Medium]
    -
246. **Number of Greater Elements to the Right** [Medium]
    -
247. **Trapping Rainwater** [Medium]
    - https://leetcode.com/problems/trapping-rain-water/
248. **Sum of Subarray Minimums** [Medium]
    - https://leetcode.com/problems/sum-of-subarray-minimums/
249. **Asteroid Collision** [Medium]
    - https://leetcode.com/problems/asteroid-collision/
250. **Sum of Subarray Ranges** [Medium]
    - https://leetcode.com/problems/sum-of-subarray-ranges/
251. **Remove K Digits** [Medium]
    - https://leetcode.com/problems/remove-k-digits/
252. **Largest rectangle in a histogram** [Medium]
    - https://leetcode.com/problems/largest-rectangle-in-histogram/
253. **Maximum Rectangles** [Medium]
    - https://leetcode.com/problems/maximal-rectangle/

#### Stack and Queue - Implementation Problems
254. **Sliding Window Maximum** [Medium]
    - https://leetcode.com/problems/sliding-window-maximum/
255. **Stock span problem** [Medium]
    - https://leetcode.com/problems/online-stock-span/
256. **Celebrity Problem** [Medium]
    - https://leetcode.com/accounts/login/?next=/problems/find-the-celebrity/
257. **LRU Cache** [Medium]
    -
258. **LFU Cache** [Medium]
    - https://leetcode.com/problems/lfu-cache/

#### Sliding Window & Two Pointer
259. **Longest Substring Without Repeating Characters** [Medium]
    - https://leetcode.com/problems/longest-substring-without-repeating-characters/
260. **Max Consecutive Ones III** [Medium]
    - https://leetcode.com/problems/max-consecutive-ones-iii/
261. **Fruit Into Baskets** [Medium]
    -
262. **Longest Repeating Character Replacement** [Medium]
    - https://leetcode.com/problems/longest-repeating-character-replacement/
263. **Binary Subarrays With Sum** [Medium]
    - https://leetcode.com/problems/binary-subarrays-with-sum/
264. **Count number of Nice subarrays** [Medium]
    - https://leetcode.com/problems/count-number-of-nice-subarrays/
265. **Number of Substrings Containing All Three Characters** [Medium]
    - https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
266. **Maximum Points You Can Obtain from Cards** [Medium]
    - https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

#### Heaps - Basics
267. **Heaps (Theory Video)** [Medium]
    -
268. **Implement Min Heap** [Medium]
    -
269. **Check if an array represents a min heap** [Medium]
    -
270. **Convert Min Heap to Max Heap** [Medium]
    -

#### Heaps - Medium
271. **K-th Largest element in an array** [Medium]
    -
272. **Kth smallest element in an array [use priority queue]** [Medium]
    -
273. **Merge K sorted Lists** [Medium]
    - https://leetcode.com/problems/merge-k-sorted-lists/
274. **Replace Elements by Their Rank** [Medium]
    -
275. **Task Scheduler** [Medium]
    - https://leetcode.com/problems/task-scheduler/
276. **Hand of Straights** [Medium]
    - https://leetcode.com/problems/hand-of-straights/

#### Heaps - Hard
277. **Design Twitter** [Medium]
    - https://leetcode.com/problems/design-twitter/
278. **Minimum Cost to Connect Sticks** [Medium]
    -
279. **Kth largest element in a stream of running integers** [Medium]
    - https://leetcode.com/problems/kth-largest-element-in-a-stream/
280. **Maximum Sum Combination** [Medium]
    -
281. **Find Median from Data Stream** [Medium]
    - https://leetcode.com/problems/find-median-from-data-stream/
282. **Top K Frequent Elements** [Medium]
    - https://leetcode.com/problems/top-k-frequent-elements/

#### Greedy Algorithm - Easy Problems
283. **Assign Cookies** [Medium]
    - https://leetcode.com/problems/assign-cookies/
284. **Fractional Knapsack** [Medium]
    -
285. **Minimum coins** [Medium]
    - https://leetcode.com/problems/coin-change/
286. **Lemonade Change** [Medium]
    - https://leetcode.com/problems/lemonade-change/
287. **Valid Paranthesis Checker** [Medium]
    - https://leetcode.com/problems/valid-parenthesis-string/

#### Greedy Algorithm - Medium/Hard
288. **N meetings in one room** [Medium]
    -
289. **Jump Game - I** [Medium]
    - https://leetcode.com/problems/jump-game/
290. **Jump Game II** [Medium]
    - https://leetcode.com/problems/jump-game-ii/
291. **Minimum number of platforms required for a railway** [Medium]
    -
292. **Job sequencing Problem** [Medium]
    -
293. **Candy** [Medium]
    - https://leetcode.com/problems/candy/
294. **Shortest Job First** [Medium]
    -
295. **Program for Least Recently Used (LRU) Page Replacement Algorithm** [Medium]
    -
296. **Insert Interval** [Medium]
    - https://leetcode.com/problems/insert-interval/
297. **Merge Intervals** [Medium]
    - https://leetcode.com/problems/merge-intervals/
298. **Non-overlapping Intervals** [Medium]
    - https://leetcode.com/problems/non-overlapping-intervals/

---

## 10. Operating Systems & Concurrency

1.  **What is a process vs thread?** *(Universal)*
    - Process: isolated, separate address space. Thread: lightweight, shares address space within a process.

2.  **What is context switching?** *(Expert addition)*
    - Saving and restoring the state of a process/thread so execution can resume later.

3.  **What is deadlock? Conditions?** *(Universal)*
    - Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.

4.  **What is starvation?** *(Expert addition)*
    - A process/thread is perpetually denied access to a resource.

5.  **What is a semaphore vs mutex?** *(Universal)*
    - Mutex: binary locking (ownership). Semaphore: counting (N permits).

6.  **What is the difference between concurrency and parallelism?** *(Expert addition)*
    - Concurrency: dealing with many things at once (interleaving). Parallelism: doing many things at once (simultaneous).

7.  **What is race condition?** *(Expert addition)*
    - Multiple threads access shared data concurrently, and the outcome depends on scheduling order.

8.  **What is virtual memory?** *(Expert addition)*
    - Abstraction giving each process its own address space. Pages mapped to physical frames by MMU.

9.  **What is paging and segmentation?** *(Expert addition)*
    - Paging: fixed-size pages. Segmentation: variable-size segments.

10. **What is thrashing?** *(Expert addition)*
    - Excessive paging due to insufficient physical memory. System spends more time swapping than executing.

11. **What are the scheduling algorithms?** *(Expert addition)*
    - FCFS, SJF, Round Robin, Priority Scheduling, Multilevel Queue, Multilevel Feedback Queue.

12. **What is the producer-consumer problem?** *(Universal)*
    - Classic synchronization problem solved with semaphores/monitors.

13. **What is the readers-writers problem?** *(Expert addition)*
    - Multiple readers can read simultaneously. Writers need exclusive access.

14. **What is the dining philosophers problem?** *(Expert addition)*
    - Illustrates deadlock and starvation. Solved with resource hierarchy, waiter (arbitrator).

15. **What is a system call?** *(Expert addition)*
    - Interface between user space and kernel space. Examples: `read`, `write`, `fork`, `exec`.

16. **What is `fork()`?** *(Expert addition)*
    - Creates a child process. Returns child PID to parent, 0 to child.

17. **What is a zombie vs orphan process?** *(Expert addition)*
    - Zombie: child terminated, parent hasn't reaped it. Orphan: parent terminated, adopted by init.

18. **What is memory fragmentation?** *(Expert addition)*
    - External (free space split into small chunks) and internal (allocated block larger than needed).

19. **What is copy-on-write (COW)?** *(Expert addition)*
    - Resource shared until one process writes. Then a copy is made. Used in `fork()`.

20. **What is the difference between interrupt and trap?** *(Expert addition)*
    - Interrupt: hardware event (I/O, timer). Trap: software event (syscall, exception).

21. **What is user mode vs kernel mode?**
    - User mode: restricted access to hardware/memory, process isolation. Kernel mode: full system access. Transition via system calls (traps).

22. **What is a spinlock vs mutex vs semaphore vs RWLock?**
    - Spinlock: busy-waits (good for short critical sections, no context switch). Mutex: sleep-waits, ownership-based. Semaphore: counting (N resources). RWLock: concurrent reads, exclusive writes.

23. **What is a memory barrier (fence)?**
    - Instruction preventing CPU/compiler from reordering memory operations around it. Used for visibility guarantees in lock-free programming.

24. **What is false sharing? How do you mitigate it?**
    - Threads on different cores modify different variables sharing a cache line, causing cache invalidation thrash. Mitigate with cache line padding (align to 64 bytes).

25. **What is an inode? What is the difference between soft and hard links?**
    - Inode: metadata structure for files (permissions, size, block locations). Hard link: multiple directory entries pointing to same inode. Soft link: special file pointing to another path.

26. **What are Linux cgroups and namespaces?**
    - cgroups: resource limits (CPU, memory, I/O) for process groups. Namespaces: isolation (PID, network, mount, UTS, IPC, user). Together form the foundation of containerization.

27. **What is `mmap`? How does it compare to `read`/`write`?**
    - Maps file/device into process address space. Pros: avoids syscall overhead, zero-copy for large I/O, page cache shared. Cons: page faults, virtual address space usage.

28. **What is the stack vs heap memory layout?**
    - Stack: per-thread, LIFO, fast allocation, limited size (~8MB). Heap: shared, dynamic allocation, slower, flexible. Stack for local variables, heap for dynamically allocated objects.

29. **What is NUMA? Why does it matter for performance?**
    - Non-Uniform Memory Access: memory access time depends on which CPU socket it's connected to. Local vs remote NUMA node matters for latency-sensitive apps.

30. **What are Linux signals? Name key ones and their default actions.**
    - SIGTERM (15): terminate gracefully. SIGKILL (9): force kill. SIGSTOP (19): pause. SIGCONT (18): resume. SIGHUP (1): hangup/reload. SIGUSR1/2 (10,12): user-defined.

31. **How does `epoll` work? What makes it better than `select`/`poll`?**
    - epoll uses an event-driven interface (callback-based). O(1) vs O(n) for select/poll. No FD_SETSIZE limit. Edge-triggered vs level-triggered modes. Only returns ready FDs.

32. **What is the Linux OOM killer? How does it select victims?**
    - Out-Of-Memory killer when system runs out of memory. Uses `oom_score` (memory usage + user-adjustable `oom_score_adj`). Kills highest-scoring process.

33. **What is a file descriptor? What are the default limits?**
    - Integer handle for open files/sockets. Default soft limit: 1024 (ulimit -n). Hard limit: usually 1048576. Production servers typically raise this.

34. **What is blocking vs non-blocking vs asynchronous I/O?**
    - Blocking: thread waits. Non-blocking: returns immediately with EAGAIN. Async I/O: operation initiated, completion signaled separately (AIO, io_uring, overlapped I/O).

36. **What is CPU affinity? How do you set it?**
    - Pinning a process/thread to specific CPU cores. Improves cache locality. Set via `sched_setaffinity()` or `taskset` command.

37. **What is `/proc` filesystem? Name useful entries.**
    - Virtual filesystem exposing kernel/process data. `/proc/cpuinfo`, `/proc/meminfo`, `/proc/self/fd/`, `/proc/self/maps`, `/proc/sys/net/ipv4/`.

38. **What are Linux capabilities?**
    - Fine-grained privileges instead of full root. Examples: `CAP_NET_BIND_SERVICE` (bind to port <1024), `CAP_SYS_ADMIN` (many admin operations). Used in containers.

40. **What is the difference between `fork` and `clone`?**
    - `fork`: creates child process with copy-on-write. `clone`: more granular control (CLONE_VM, CLONE_THREAD flags). `pthread_create` uses `clone` internally.

42. **What is shared memory? What are the IPC mechanisms?**
    - Shared memory (`shmget`/`shmat`, `mmap MAP_SHARED`): fastest IPC — no kernel copy. Others: pipes, FIFOs, message queues (`mq_*`), Unix domain sockets, signals.

43. **What is LVM? (Logical Volume Manager)**
    - Abstraction layer over physical disks. PV (physical volume) → VG (volume group) → LV (logical volume). Supports snapshots, resizing, striping, RAID without downtime.

44. **What is the Linux kernel's `dmesg` and its use in diagnostics?**
    - Kernel ring buffer. Contains boot messages, hardware errors, OOM messages, filesystem errors, device driver messages. `dmesg -w` for real-time tailing.

45. **What is coredump? How do you analyze one?**
    - Snapshot of process memory at crash time. Analyzed with gdb: `gdb /path/to/binary core`. Essential for investigating segfaults, panics, and production crashes.

46. **What is ASLR and why is it important?**
    - Address Space Layout Randomization. Randomizes memory layout (stack, heap, libraries). Mitigates buffer overflow exploits by making addresses unpredictable.

47. **What is a TLB miss? How does it affect performance?**
    - Translation Lookaside Buffer miss (virtual→physical page mapping not cached). Forces page table walk. Huge pages (2MB/1GB) reduce TLB pressure and improve performance.

48. **What is the difference between `malloc` and `mmap` for memory allocation?**
    - `malloc` uses brk/sbrk for small allocations (heap expansion). For large allocations (>128KB), glibc uses `mmap` (map anonymous memory). `mmap`'d memory is released on `free`.

49. **What is `ptrace`? Use cases?**
    - System call allowing one process to observe/control another. Used by debuggers (gdb), `strace`, `ltrace`. Can intercept syscalls, modify memory/registers.

50. **What is a Linux control group (cgroup v2)?**
    - Hierarchical organization of processes with resource controllers: `cpu.weight`, `memory.high`, `io.max`. Foundation for container resource limits (Docker/K8s).

---

## 11. Networking

1.  **What is OSI model? Layers?** *(Universal)*
    - Physical, Data Link, Network, Transport, Session, Presentation, Application.

2.  **What is TCP/IP model?** *(Universal)*
    - Link, Internet, Transport, Application.

3.  **What is the difference between TCP and UDP?** *(Universal)*
    - TCP: connection-oriented, reliable, ordered, flow control. UDP: connectionless, best-effort, lower overhead.

4.  **What is the three-way handshake?** *(Universal)*
    - SYN → SYN-ACK → ACK. Establishes TCP connection.

5.  **What is the four-way handshake?** *(Expert addition)*
    - FIN → ACK → FIN → ACK. Terminates TCP connection.

6.  **What is DNS? How does it work?** *(Universal)*
    - Domain Name System. Resolves domain names to IP addresses. Hierarchy: root → TLD → authoritative.

7.  **What is HTTP vs HTTPS?** *(Expert addition)*
    - HTTPS: HTTP over TLS/SSL. Encrypted, verified certificates.

8.  **What is HTTP/1.1 vs HTTP/2 vs HTTP/3?** *(Expert addition)*
    - HTTP/1.1: text, keep-alive, pipelining. HTTP/2: binary, multiplexed, server push. HTTP/3: over QUIC (UDP).

9.  **What is TLS? How does the handshake work?** *(Expert addition)*
    - Transport Layer Security. Client Hello, Server Hello, Certificate exchange, Key exchange, Secure connection.

10. **What is a load balancer? Types?** *(Expert addition)*
    - Layer 4 (IP/port), Layer 7 (HTTP/application). Algorithms: Round Robin, Least Connections, IP Hash.

11. **What is a WebSocket?** *(Expert addition)*
    - Full-duplex communication over a single TCP connection. Used for real-time apps.

12. **What is a proxy? Forward vs Reverse?** *(Expert addition)*
    - Forward: on behalf of client. Reverse: on behalf of server.

13. **What is CIDR notation?** *(Expert addition)*
    - Classless Inter-Domain Routing. `192.168.1.0/24` means 24-bit network prefix.

14. **What is subnetting?** *(Expert addition)*
    - Dividing an IP network into smaller subnetworks.

15. **What is NAT?** *(Expert addition)*
    - Network Address Translation. Maps private IPs to a public IP.

16. **What is ARP?** *(Expert addition)*
    - Address Resolution Protocol. Resolves IP → MAC address.

17. **What is a VLAN?** *(Expert addition)*
    - Virtual LAN. Logically segments a network at layer 2.

18. **What is BGP?** *(Expert addition)*
    - Border Gateway Protocol. Routes between autonomous systems on the internet.

19. **What is a socket?** *(Expert addition)*
    - Endpoint for communication. Combination of IP + Port.

20. **What is the TCP congestion control?** *(Expert addition)*
    - Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery. AIMD (Additive Increase Multiplicative Decrease).

21. **What is a MAC address vs IP address?**
    - MAC: hardware address (layer 2, burned into NIC), 48-bit, used within local network. IP: logical address (layer 3), used for end-to-end routing.

22. **What is a DDoS attack? Common mitigation strategies?**
    - Distributed Denial of Service. Mitigations: rate limiting, traffic scrubbing (Cloudflare, AWS Shield), CDN, anycast, connection limiting, WAF.

23. **What is a TCP segment vs IP packet vs Ethernet frame?**
    - TCP segment: L4 (source/dest port, seq/ack numbers). IP packet: L3 (source/dest IP). Ethernet frame: L2 (source/dest MAC, CRC). Each wraps the previous.

24. **What is `traceroute`? How does it work?**
    - Traces network path using ICMP with increasing TTL values. Each router along path decrements TTL, sends ICMP Time Exceeded back. Reveals route and latency per hop.

25. **What is MTU? How does fragmentation work?**
    - Maximum Transmission Unit (usually 1500 bytes for Ethernet). Larger IP packets are fragmented at router, reassembled at destination. Fragmentation is inefficient — avoid with path MTU discovery.

26. **What is HTTP persistent connection (keep-alive)?**
    - Reuse TCP connection for multiple HTTP requests. Avoids connection setup overhead (TCP handshake, TLS). Default in HTTP/1.1. Pooled by browsers up to 6 per domain.

27. **What is a cookie? SameSite attribute?**
    - Cookie: client-side storage sent with HTTP requests. SameSite: Strict (same-site only), Lax (same-site + top-level GET), None (cross-site + Secure). Prevents CSRF.

28. **What is the `Host` header? Why is it important?**
    - Tells server which virtual host the client wants. Enables name-based virtual hosting (multiple sites on one IP). Absent → HTTP/1.0 behavior (single site).

29. **What is QUIC? How is it different from TCP + TLS?**
    - QUIC: Google-designed, HTTP/3 base. Uses UDP, built-in encryption (no separate TLS), 0-RTT connection establishment, connection migration (survives IP change).

30. **What is a network socket? What are the types?**
    - Endpoint for communication (IP + port). Types: TCP socket (stream, connection-oriented), UDP socket (datagram, connectionless), Unix socket (local IPC, file-path-addressed).

---

## 12. Databases (General)

1.  **What is a primary key vs foreign key?** *(Universal)*
    - PK: unique identifier for a row. FK: references PK in another table.

2.  **What is normalization? What are the normal forms?** *(Universal)*
    - Process to reduce redundancy. 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF.

3.  **What is denormalization?** *(Expert addition)*
    - Intentionally adding redundancy for read performance.

4.  **What is an index? When should you create one?** *(Universal)*
    - Data structure for fast data retrieval. Trade-off: slower writes.

5.  **What is a view?** *(Expert addition)*
    - Virtual table based on a query. Can simplify complex queries, provide security.

6.  **What is a stored procedure?** *(Expert addition)*
    - SQL code saved and executed on the database server.

7.  **What is a trigger?** *(Expert addition)*
    - Automatically executes in response to events (INSERT, UPDATE, DELETE).

8.  **What is a transaction?** *(Universal)*
    - A unit of work. ACID properties.

9.  **What is the difference between UNION and UNION ALL?** *(Expert addition)*
    - UNION removes duplicates. UNION ALL keeps duplicates (faster).

10. **What is a JOIN? Explain INNER, LEFT, RIGHT, FULL.** *(Universal)*
    - INNER: matching rows. LEFT: all from left, NULLs from right. RIGHT: vice versa. FULL: all rows from both.

11. **What is a N+1 query?** *(Expert addition)*
    - Executing a query for each result of another query. Solved with eager loading / JOINs.

12. **What is SQL vs NoSQL?** *(Universal)*
    - SQL: relational, schema fixed, ACID. NoSQL: flexible schema, BASE, various types (document, key-value, graph, column).

13. **What is a shard?** *(Expert addition)*
    - Horizontal partition of data across databases. Shard key determines distribution.

14. **What is read replica?** *(Expert addition)*
    - Copy of primary used for read queries. Reduces load on primary.

15. **What is eventual consistency?** *(Expert addition)*
    - All copies will eventually converge. Common in distributed NoSQL systems.

16. **What is CAP theorem in the context of databases?** *(Expert addition)*
    - Consistency, Availability, Partition tolerance. Pick two.

17. **What is a database connection timeout vs query timeout?** *(Expert addition)*
    - Connection timeout: time to establish connection. Query timeout: max time for query execution.

18. **What is connection pooling?** *(Expert addition)*
    - Reuse established connections. Reduces overhead of creating new connections.

19. **What is a full-text search?** *(Expert addition)*
    - Searches natural language text. PostgreSQL: GIN + tsvector. Dedicated: Elasticsearch.

20. **What is ETL?** *(Expert addition)*
    - Extract, Transform, Load. Data pipeline for moving data between systems.

21. **What is a clustered vs non-clustered index?**
    - Clustered: determines physical row order, one per table (InnoDB primary key). Non-clustered: separate structure with pointers to rows, multiple per table.

22. **What is index cardinality and why does it matter?**
    - Number of distinct values in an indexed column. High cardinality (unique values) makes index highly selective. The optimizer uses cardinality statistics for plan choice.

23. **What is gap locking / next-key locking?**
    - Gap lock: locks range between rows. Next-key lock: combination of row lock + gap lock. Prevents phantoms in InnoDB Repeatable Read isolation.

24. **Explain the four SQL isolation levels.**
    - Read Uncommitted (dirty reads), Read Committed (no dirty reads), Repeatable Read (no non-repeatable reads), Serializable (fully isolated). Higher isolation = less concurrency.

25. **What is a dirty read, non-repeatable read, and phantom read?**
    - Dirty: read uncommitted data. Non-repeatable: same row read twice gets different values. Phantom: same query returns different rows due to inserts in another transaction.

26. **How does MVCC work internally?**
    - Each row has hidden columns (creation/deletion transaction IDs). Readers see a snapshot of committed data at their start time (or statement time). Writers create new row versions.

27. **How are database deadlocks detected and resolved?**
    - Deadlock detector runs a cycle detection algorithm on the waits-for graph. Victim transaction (lowest cost) is rolled back. Minimize by accessing tables in consistent order.

28. **When does the optimizer choose Nested Loop vs Hash Join vs Merge Join?**
    - Nested Loop: one small table, good index on inner table. Hash Join: large unindexed tables, no sorting needed. Merge Join: sorted inputs, range comparisons.

29. **What is a WAL (Write-Ahead Log) and how does it enable crash recovery?**
    - Every modification is written to WAL before data files. On crash, DB replays WAL from last checkpoint (redo) and rolls back uncommitted transactions (undo).

30. **What is the difference between CHAR, VARCHAR, and TEXT?**
    - CHAR(N): fixed length, blank-padded. VARCHAR(N): variable length with max limit. TEXT: variable length, no limit (but may have storage/performance differences per DB).

31. **What is connection pooling vs statement pooling vs transaction pooling?**
    - Connection: reuse DB connections. Statement: reuse prepared statements. Transaction: reuse connections across transactions only (PgBouncer transaction mode).

32. **What is multi-master replication? What are the conflict resolution strategies?**
    - Multiple nodes accept writes. Conflicts resolved via: last-write-wins (timestamp), CRDTs, application-level conflict handling, or quorum-based approaches.

33. **What is a star schema vs snowflake schema?**
    - Star: fact table surrounded by denormalized dimension tables. Snowflake: dimensions normalized into sub-dimensions. Star is simpler for query performance.

34. **What are materialized views? Pros and cons?**
    - Pre-computed, stored query results. Pros: fast reads. Cons: stale data, storage overhead, refresh cost. Use for dashboards, reporting, aggregation-heavy workloads.

35. **What is a composite index? How does column order matter?**
    - Index on multiple columns. Column order matters: leftmost prefix rule. Most selective (or equality) columns first. `(a, b)` covers queries on `a` but not on `b` alone.

36. **What is a B-tree index vs LSM-tree? When is each preferred?**
    - B-tree: good for reads, point queries, range scans (PostgreSQL, MySQL InnoDB). LSM-tree: good for writes, sequential I/O (Cassandra, RocksDB, LevelDB).

37. **Why is `SELECT *` discouraged in production?**
    - Reads unnecessary columns (wasted I/O), prevents index-only scans, breaks on schema changes, transfers more data over network.

38. **How does `ORDER BY ... LIMIT` optimization work?**
    - With correct index, DB can read in order without sorting (avoiding filesort). Without index, sorts all matching rows then takes top N — expensive.

39. **What is a correlated subquery? When is it better to use a JOIN instead?**
    - Subquery that references outer query (executed per outer row). JOIN often better because the optimizer can apply set-based operations.

40. **What is `EXISTS` vs `IN` vs `JOIN`? Performance differences?**
    - `EXISTS` can short-circuit on first match. `IN` may use hash/sort. `JOIN` works set-based. Each can be optimal depending on NULL handling, data distribution, and optimizer.

41. **What is a covering index?**
    - An index containing ALL columns needed by a query. DB can answer query entirely from index, never touching the table (index-only scan).

42. **What is an expression (functional) index?**
    - Index on the result of an expression: `CREATE INDEX idx_lower ON users (LOWER(email))`. Enables fast lookups on computed values.

43. **How do you tune `UPDATE` performance on large tables?**
    - Use batching (`LIMIT 1000` in loop), ensure indexed WHERE, minimize index updates, avoid updating indexed columns if possible, consider partitioning.

44. **What is index write amplification?**
    - Each row write must update all relevant indexes. More indexes = slower writes. Trade-off: read performance vs write performance + storage.

45. **What is database sharding? What are common sharding strategies?**
    - Horizontal partitioning across databases. Strategies: hash-based, range-based, lookup-table based, geographic sharding. Shard key selection is critical.

46. **What is the difference between a unique constraint and a unique index?**
    - In most DBs, they're implemented the same way (unique index). A unique constraint is a logical constraint; a unique index is a physical structure that enforces uniqueness.

47. **What is `ON DELETE CASCADE`? When would you avoid it?**
    - Automatically deletes child rows when parent is deleted. Avoid in multi-tenant apps, when cascading scope is large, or when you need explicit audit/logging.

48. **What are generated (computed) columns?**
    - Columns whose value is derived from other columns. Stored: physically persisted. Virtual: computed on read. Useful for indexes on expressions.

49. **What is a database cursor? When would you use one?**
    - Pointer to a result set row. Use for row-by-row processing (ETL, batch jobs). Avoid in OLTP — set-based operations are faster.

50. **What is the difference between optimistic and pessimistic locking?**
    - Optimistic: assume no conflict, check at commit (version/timestamp). Pessimistic: lock rows on read (`SELECT ... FOR UPDATE`). Optimistic for low contention, pessimistic for high.

---

## 13. Low-Level Design / Design Patterns

1.  **Design a Parking Lot system.** *(Low-level design classic)*
2.  **Design a Library Management System.** *(Classic)*
3.  **Design a Vending Machine.** *(Classic)*
4.  **Design an Elevator System.** *(Expert addition)*
5.  **Design a Task Management System (like Jira/Trello).** *(Expert addition)*
6.  **Design a Chess Game.** *(Classic)*
7.  **Design an ATM system.** *(Classic)*
8.  **Design a Restaurant Ordering System.** *(Expert addition)*
9.  **Design a Logging Framework.** *(Expert addition)*
10. **Design a Traffic Light System.** *(Expert addition)*
11. **Design a social network like Facebook (OOD).** *(checkcheckzz)*
12. **Design a thesaurus / dictionary.** *(Expert addition)*
13. **Design a Meeting Calendar System.** *(Expert addition)*
14. **Design a Movie Ticket Booking System (like BookMyShow).** *(Expert addition)*
15. **Design a Coffee Machine (with different recipes).** *(Expert addition)*

**Common Design Patterns to Know:**
- Singleton, Factory, Abstract Factory, Builder, Prototype
- Adapter, Bridge, Composite, Decorator, Facade, Proxy
- Chain of Responsibility, Command, Iterator, Mediator, Observer, State, Strategy, Template, Visitor, Memento

---

## 14. Behavioral & HR Questions

1.  **Tell me about yourself.** *(Universal)*
2.  **Why do you want to work here?** *(Universal)*
3.  **What is your biggest strength?** *(Universal)*
4.  **What is your biggest weakness?** *(Universal)*
5.  **Tell me about a time you had a conflict with a coworker.** *(STAR method)*
6.  **Describe a challenging project you worked on.** *(STAR)*
7.  **Tell me about a time you failed.** *(STAR)*
8.  **How do you handle tight deadlines?** *(STAR)*
9.  **Describe a time you showed leadership.** *(STAR)*
10. **How do you stay updated with technology?** *(Universal)*
11. **Tell me about a project you are most proud of.** *(STAR)*
12. **How do you handle code review feedback?** *(Expert addition)*
13. **Describe a time you had to make a trade-off decision.** *(STAR)*
14. **How do you prioritize tasks when everything is urgent?** *(Expert addition)*
15. **Tell me about a time you had to learn a new technology quickly.** *(STAR)*
16. **What would your previous manager say about you?** *(Universal)*
17. **Why are you leaving your current job?** *(Universal)*
18. **Where do you see yourself in 5 years?** *(Universal)*
19. **Describe a time you improved a process.** *(STAR)*
20. **How do you mentor junior developers?** *(Expert addition)*

21. **Describe a time you disagreed with a technical decision.** *(STAR)*
22. **How do you handle ambiguity or unknown requirements?** *(STAR)*
23. **Tell me about a time you went above and beyond.** *(STAR)*
24. **What is the most difficult bug you've ever debugged?** *(STAR)*
25. **How do you stay productive when working remotely?** *(Expert addition)*
26. **Describe a time you had to convince someone to adopt your approach.** *(STAR)*
27. **What would you do if you discovered a security vulnerability in production?** *(Expert addition)*
28. **Tell me about a time you had to give difficult feedback.** *(STAR)*
29. **How do you balance speed vs quality when shipping features?** *(Expert addition)*
30. **Describe a time you made a decision with incomplete data.** *(STAR)*
31. **How do you handle on-call incidents and post-mortems?** *(Expert addition)*
32. **Tell me about a time you automated a manual process.** *(STAR)*
33. **What do you do if you're blocked on a task?** *(Expert addition)*
34. **Describe a cross-team collaboration you led.** *(STAR)*
35. **How do you approach learning a new codebase?** *(Expert addition)*
36. **Tell me about a time you had to say no to a stakeholder.** *(STAR)*
37. **What is your experience with production deployments?** *(Expert addition)*
38. **How do you keep up with industry trends and new technologies?** *(Expert addition)*
39. **Tell me about a time you improved test coverage or reliability.** *(STAR)*
40. **What kind of work environment brings out your best performance?** *(Expert addition)*

---

## 15. Security Fundamentals

1. **What is SQL injection and how do you prevent it?**
   - Malicious SQL in user input. Prevent with parameterized queries / prepared statements. Never concatenate user input into SQL.

2. **What is XSS? Types and prevention?**
   - Cross-Site Scripting. Stored (persistent), Reflected (non-persistent), DOM-based. Prevent with output encoding, CSP headers, input validation.

3. **What is CSRF? How do you mitigate it?**
   - Cross-Site Request Forgery. Mitigations: CSRF tokens, SameSite cookies (Strict/Lax), origin/referer header validation.

4. **What is the difference between authentication and authorization?**
   - Authentication: verifying identity ("who you are"). Authorization: verifying permissions ("what you can do").

5. **Explain JWT structure and security considerations.**
   - Header.Claims.Signature (base64url encoded). Considerations: use short expiry, store refresh tokens securely, validate signature, never trust `alg: none`.

6. **What is the difference between HS256 and RS256 for JWT?**
   - HS256: symmetric (same secret to sign and verify). RS256: asymmetric (private key signs, public key verifies). RS256 preferred for multi-service environments.

7. **Explain OAuth 2.0 authorization code flow with PKCE.**
   - Client → Authorization endpoint → Auth code → Token endpoint → Access token. PKCE adds `code_challenge` and `code_verifier` to prevent interception.

8. **What is OIDC (OpenID Connect)?**
   - Identity layer on top of OAuth 2.0. Adds `id_token` (JWT) for authentication. User info endpoint for profile data.

9. **What is TLS? How does the handshake work?**
   - Transport Layer Security. Client Hello → Server Hello + Certificate → Key Exchange → Change Cipher Spec → Finished. Establishes encrypted channel.

10. **What is TLS 1.3 vs TLS 1.2?**
    - TLS 1.3: 1-RTT handshake (vs 2-RTT), removed weak ciphers, forward secrecy by default, 0-RTT resumption.

11. **What is mTLS? When would you use it?**
    - Mutual TLS: both client and server present certificates. Used for service-to-service authentication in zero-trust architectures, service meshes (Istio).

12. **What is certificate pinning? What are its downsides?**
    - Hardcoding expected certificate/public key. Downsides: certificate rotation breaks clients, HPKP caused outages, now deprecated in favor of Certificate Transparency.

13. **What are CSP headers and why are they important?**
    - Content Security Policy: restricts sources for scripts, styles, images, etc. Mitigates XSS and data injection attacks.

14. **What is CORS? How do preflight requests work?**
    - Cross-Origin Resource Sharing. Browser sends OPTIONS preflight for non-simple requests (custom headers, non-standard methods). Server responds with `Access-Control-Allow-*` headers.

15. **How do you securely store passwords?**
    - Hash with bcrypt, scrypt, or argon2 (not MD5/SHA1/SHA256). Use salt + work factor. Never store plaintext or encrypted passwords (where you have the key).

16. **What is rate limiting? What are the common algorithms?**
    - Limits requests per time window. Algorithms: Token bucket, Leaky bucket, Fixed window, Sliding window log, Sliding window counter. Prevents brute force and DoS.

17. **What is a zero-trust security model?**
    - "Never trust, always verify." No implicit trust based on network location. Requires authentication, authorization, and encryption for every request.

18. **What is RBAC vs ABAC?**
    - RBAC (Role-Based Access Control): permissions assigned to roles, users assigned to roles. ABAC (Attribute-Based Access Control): policies based on user/resource/environment attributes. ABAC is more fine-grained.

19. **What is encryption at rest vs in transit?**
    - At rest: data encrypted on disk (AES-256, LUKS, S3 SSE). In transit: data encrypted over network (TLS, mTLS, SSH). Both required for defense in depth.

20. **What are common API security best practices?**
    - Use HTTPS, authenticate all requests, rate limit, validate input, use API keys/tokens, implement audit logging, encrypt sensitive data, use proper CORS config, version your APIs.

---

## 16. Software Engineering & Clean Code

1. **What is clean code? What are its characteristics?**
    - Readable, maintainable, testable, follows single responsibility, meaningful names, minimal comments (code documents itself), handles errors properly.

2. **What is DRY? When is it harmful to apply?**
    - Don't Repeat Yourself. Harmful when forced abstractions couple unrelated concepts (DRY vs Concern Separation). Copy-paste sometimes justified for independent evolution.

3. **What is YAGNI?**
    - "You Ain't Gonna Need It." Don't add functionality until it's needed. Avoids speculative complexity, over-engineering. Core of extreme programming.

4. **What is KISS?**
    - "Keep It Simple, Stupid." Simplest solution that works is usually best. Avoid clever tricks, premature optimization, unnecessary abstraction layers.

5. **What is SOLID in practice? Give concrete examples.**
    - SRP: one class = one concern (validate ≠ send email). OCP: extend via plugin/strategy, not modification. LSP: subtypes must maintain invariants. ISP: small focused interfaces. DIP: depend on abstractions.

6. **What is technical debt? How do you manage it?**
    - Cost of shortcuts / suboptimal solutions. Management: track in backlog, allocate 20% sprint time, refactor when touching code, have clear definition of done.

7. **What is the Boy Scout Rule?**
    - "Leave the campground cleaner than you found it." Make small improvements every time you touch code (rename, extract, add test). Prevents code rot.

8. **What is code review? What do you look for?**
    - Peer review process. Look for: correctness, edge cases, performance, security, test coverage, readability, adherence to conventions. Not style nitpicking (let linters do that).

9. **What is the difference between unit test, integration test, and end-to-end test?**
    - Unit: single function/class, mocked dependencies. Integration: components interact (DB + app). E2E: full system as user. Testing pyramid: many units, few E2E.

10. **What is TDD? What are the benefits and drawbacks?**
    - Test-Driven Development: red (write failing test) → green (make pass) → refactor. Benefits: design emerges, safety net, fewer bugs. Drawbacks: slower initially, not for all UI/exploratory.

11. **What is the difference between mocking, stubbing, and faking?**
    - Mock: verify interactions. Stub: returns predefined value. Fake: lightweight implementation (in-memory DB). Mocks for behavior, stubs for state.

12. **What is the test pyramid? Why should you have many unit tests?**
    - Unit (lots) → Integration (some) → E2E (few). Unit tests: fast, reliable, pinpoint failures. E2E: slow, fragile, comprehensive but expensive.

13. **What is mutation testing?**
    - Introduces faults (mutations) into code, checks if tests detect them. Measures test quality (killed vs surviving mutants). Tools: Stryker, PIT.

14. **What is continuous integration and delivery?**
    - CI: merge often, automated build + test on every push. CD: automated deployment to production after tests pass. Reduce feedback loop, catch issues early.

15. **What is feature flag / toggle? Why use it?**
    - Conditional feature activation without deployment. Use: trunk-based development, canary releases, A/B testing, kill switches. Fragments code but enables safer releases.

16. **What is semantic versioning (SemVer)?**
    - MAJOR.MINOR.PATCH. MAJOR: breaking changes. MINOR: backward-compatible features. PATCH: backward-compatible bug fixes. Pre-release tags: alpha, beta, rc.

17. **What is the difference between git merge and git rebase?**
    - Merge: preserves history (non-linear), explicit merge commit. Rebase: linear history, rewrite commits, cleaner log. Never rebase shared branches.

18. **What is git flow vs trunk-based development?**
    - Git flow: develop → feature → release → hotfix branches. Trunk-based: short-lived feature branches → main. Trunk-based enables CI/CD, Git flow suits release-versioned products.

19. **What is pair programming? When is it useful?**
    - Two developers, one keyboard (driver + navigator). Useful for: complex features, onboarding, knowledge transfer, critical code. Reduces bugs, increases code quality.

20. **What is the difference between waterfall and agile?**
    - Waterfall: sequential phases (requirements → design → implement → test → deploy). Agile: iterative, incremental, feedback-driven, adaptive planning. Scrum (sprints) + Kanban (flow).

21. **What is a sprint retro? What are action items?**
    - End-of-sprint ceremony: what went well, what could improve, what to try next. Action items: concrete, tracked changes. Foundation of continuous improvement.

22. **What is estimation in agile? Story points vs hours?**
    - Story points: relative effort (Fibonacci: 1, 2, 3, 5, 8, 13). Hours: absolute time. Points: faster, uncertainty accounted for, team-relative. Hours: required for external deadlines.

23. **What is a postmortem? Key elements of a good one?**
    - Incident analysis after outage/bug. Blameless: focus on systemic issues, not individuals. Elements: timeline, root cause, impact, action items, follow-up.

24. **What is the difference between sync vs async communication in teams?**
    - Sync: meetings, standups, calls (real-time, interrupts flow). Async: docs, Slack (thoughtful, documented, timezone-friendly). Balance: use sync for alignment, async for details.

26. **What is a monorepo vs multi-repo? Pros and cons?**
    - Monorepo: single repo for all code. Pros: atomic changes, shared tooling, unified versioning. Cons: scaling git, CI per project. Multi-repo: per-service repo. Pros: independent, simple CI. Cons: cross-repo changes.

27. **What is a small batch vs large batch in software delivery?**
    - Small batch: frequent small changes (lower risk, faster feedback, easier rollback). Large batch: infrequent big releases (higher risk, more coordination, harder review). Lean prefers small batches.

28. **What is trunk-based development vs feature branching?**
    - Trunk: short-lived branches (<1 day), merge to main frequently. Feature branching: long-lived branches, merge when complete. Trunk enables CI/CD, feature branching can lead to merge hell.

29. **What is a pull request? What makes a good one?**
    - Code review request. Good PR: small scope (single concern), clear description & context, linked to issue, passing CI, covered by tests, ready for review.

30. **What is a spike in agile development?**
    - Time-boxed research/exploration activity. Goal: reduce uncertainty, prove concept, gather data for estimation. Result: findings doc, prototype code (throwaway).

31. **What is Definition of Done (DoD)?**
    - Checklist that must be satisfied for work to be considered complete. Examples: code reviewed, tests pass, documented, deployed to staging, acceptance criteria met.

32. **What is the difference between a software architect and a senior engineer?**
    - Architect: broad system design, technology strategy, cross-team standards. Senior: deep expertise, technical decision-making within team, mentoring. Both overlap in practice.

33. **What is the Strangler Fig pattern?**
    - Gradually replace legacy system by building new version alongside, routing users incrementally. Old system "strangled" over time. Low risk, continuous migration.

34. **What is a distributed monolith? Why is it bad?**
    - Microservices deployed independently but tightly coupled (shared DB, synchronous calls everywhere). Worst of both worlds: network complexity + no independent deployability.

35. **What is Conway's Law? How does it affect architecture?**
    - "Organizations design systems that mirror their communication structure." Team boundaries → service boundaries. Inverse Conway maneuver: reorganize teams to drive desired architecture.

36. **What is a domain event?**
    - Something meaningful that happened in the domain (past tense). Published when state changes. Examples: OrderPlaced, PaymentReceived. Consumed by other bounded contexts.

37. **What is the difference between orchestration and choreography?**
    - Orchestration: central coordinator tells services what to do (explicit control flow). Choreography: services react to events, no coordinator (decoupled, harder to reason about).

38. **What is Risk-First development?**
    - Software development as risk management. Different risks (schedule, complexity, dependency, usability) trade off against each other. Best design = best risk profile.

39. **What is the difference between leading and lagging indicators?**
    - Leading: predict future outcomes (code review cycle time, test coverage trend). Lagging: measure past results (defect rate, uptime, MTTR). Use both for balanced view.

40. **What is a capacity plan?**
    - Forecasting resource needs based on growth projections. Method: current usage (CPU/memory/storage/bandwidth) × growth rate × safety margin. Reviewed quarterly.

---

## 17. Cloud Platforms & Architecture

1. **What are the three main cloud service models (IaaS, PaaS, SaaS)?**
    - IaaS: virtual machines, storage, networking (AWS EC2, GCP Compute Engine). PaaS: managed runtime, build/deploy (Heroku, GAE, Elastic Beanstalk). SaaS: end-user applications (Gmail, Salesforce).

2. **What is AWS EC2? What instance types exist?**
    - Virtual servers in cloud. Types: general purpose (t3, m5), compute optimized (c5), memory optimized (r5, x1), storage optimized (i3, d2), GPU (p3, g4).

3. **What is AWS S3? What are the storage classes?**
    - Simple Storage Service (object storage). Classes: Standard (frequent access), Intelligent-Tiering (auto-tier), Standard-IA (infrequent), One Zone-IA, Glacier (archive), Deep Archive.

4. **What is AWS Lambda? What are the limits?**
    - Serverless compute (FaaS). Limits: 15 min timeout, 128MB–10GB memory, 512MB–10GB ephemeral storage, 50MB deployment package (zipped). Cold starts for infrequent functions.

5. **What is AWS DynamoDB? Key design patterns?**
    - NoSQL key-value + document DB. Partition key + sort key. Patterns: single table (overloaded PK/SK), adjacency list (graphs), GSI/LSI (alternate access patterns).

6. **What is AWS RDS? What DB engines does it support?**
    - Managed relational DB. Engines: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora. Features: automated backups, Multi-AZ, read replicas, auto-scaling storage.

7. **What is AWS Aurora? How is it different from RDS?**
    - MySQL/PostgreSQL-compatible, custom-built. 5x throughput (MySQL), 3x (PostgreSQL). Storage auto-scales to 128TB. 6-way replication across 3 AZs. Faster recovery.

8. **What is AWS VPC? What are subnets, security groups, NACLs?**
    - Virtual Private Cloud: isolated network. Subnets: public (routed to internet) vs private. Security Groups: stateful instance firewall. NACLs: stateless subnet firewall.

9. **What is AWS ELB? Types?**
    - Elastic Load Balancing. Types: ALB (L7, HTTP/HTTPS, path/host routing), NLB (L4, ultra-low latency, static IP), CLB (legacy). ALB for microservices, NLB for throughput.

10. **What is AWS CloudFront?**
    - CDN. Edge locations for static/dynamic content. Origin: S3, ALB, EC2, custom. Signed URLs/Cookies for private content. Lambda@Edge for lightweight processing.

11. **What is AWS SQS and SNS? What's the difference?**
    - SQS: message queue (pull-based, at-least-once, ordering with FIFO). SNS: pub/sub (push-based, fan-out to multiple subscribers). SQS + SNS: decoupled distributed systems.

12. **What is AWS Kinesis? When to use vs SQS?**
    - Real-time streaming data. Kinesis Data Streams: ordered, replayable, multiple consumers. Kinesis Firehose: auto-load to S3/Redshift/Elasticsearch. Use for ETL, analytics, streaming.

13. **What is AWS Elasticache? What engines does it support?**
    - Managed Redis + Memcached. Use for caching, session store, pub/sub. Redis supports clustering, persistence, advanced data types. Memcached: simpler, multi-threaded.

14. **What is AWS Route 53?**
    - Managed DNS service. Features: domain registration, routing policies (simple, weighted, latency, geolocation, failover), health checks, alias records for AWS resources.

15. **What is the AWS Well-Architected Framework?**
    - 6 pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability. Best practices for cloud architecture.

16. **What is GCP Cloud Run vs Kubernetes Engine?**
    - Cloud Run: serverless containers (scale to zero). GKE: full K8s orchestration. Cloud Run for stateless HTTP services, GKE for complex workloads, stateful apps.

17. **What is BigQuery? How does columnar storage work?**
    - Serverless data warehouse. Columnar storage: data stored per column (not per row). Compresses better (similar data together), faster for analytical queries (fewer columns read).

18. **What is GCP Pub/Sub vs AWS Kinesis?**
    - Pub/Sub: global, at-least-once, pull/push. Kinesis: per-stream ordering, shard-based scaling, replay. Pub/Sub for event-driven async, Kinesis for ordered stream processing.

19. **What is infrastructure as code (IaC)? Tools?**
    - Manage infrastructure via declarative config. Tools: Terraform (multi-cloud), CloudFormation (AWS), Pulumi (general-purpose languages), CDK (AWS, Python/TypeScript).

20. **What is multi-cloud vs hybrid cloud?**
    - Multi-cloud: using multiple cloud providers. Hybrid: combining on-prem + cloud. Multi-cloud avoids vendor lock-in, hybrid enables gradual migration, data sovereignty.

21. **What is AWS CloudWatch vs X-Ray?**
    - CloudWatch: metrics, logs, alarms. X-Ray: distributed tracing (trace ID, segments, service maps). CloudWatch shows resource metrics, X-Ray traces request paths.

22. **What is AWS Step Functions?**
    - Serverless workflow orchestration. State machine: tasks, choices, parallel, waits, retries. Integrates with Lambda, SQS, ECS, DynamoDB. Visual workflow editor.

23. **What is AWS API Gateway? What are the endpoint types?**
    - Managed API service. Endpoint types: Edge-optimized (CloudFront), Regional, Private (VPC). Features: throttling, caching, auth (IAM, Cognito, Lambda), API keys.

24. **What is GCP Cloud Functions vs Cloud Run vs GKE?**
    - Cloud Functions: serverless FaaS (event-driven). Cloud Run: serverless containers (HTTP only, auto-scale to 0). GKE: full K8s. Complexity/control increases left to right.

25. **What is Azure DevOps? Pipelines, Boards, Repos?**
    - CI/CD (Pipelines), agile planning (Boards), Git hosting (Repos), package management (Artifacts), test plans. End-to-end ALM. Alternative to GitHub + Jira.

26. **What is AWS WAF? What does it protect against?**
    - Web Application Firewall. Protects against SQL injection, XSS, size limit violations, rate-based rules, IP reputation lists. Attached to CloudFront, ALB, API Gateway.

27. **What is AWS CloudTrail vs AWS Config?**
    - CloudTrail: API call history (who did what, when). Config: resource configuration changes, compliance rules (e.g., "S3 bucket not public"). Both essential for audit.

28. **What is GCP Cloud Storage? Object lifecycle management?**
    - Object storage (S3 equivalent). Classes: Standard, Nearline, Coldline, Archive. Lifecycle: auto-delete/transition after N days (e.g., Standard → Coldline after 30d → Archive after 365d).

29. **What is AWS KMS?**
    - Key Management Service. Create, rotate, disable symmetric/asymmetric keys. Integrated with S3 (SSE-KMS), EBS, RDS. FIPS 140-2 HSM-backed. Key policies for access control.

30. **What is AWS ECS vs EKS vs Fargate?**
    - ECS: Amazon's container orchestration. EKS: managed Kubernetes. Fargate: serverless compute (no node management). ECS + Fargate simplest, EKS most portable.

---

## 18. Form Builder — Project-Specific Questions

1. **How did you design the multi-tenant form builder? How does tenant isolation work?**
   - Every tenant gets its own isolated database schema. When a request comes in, a middleware intercepts it, extracts the tenant identifier from the authentication context or URL, and resolves the tenant-specific database connection. This connection is then stored in the request context using Gin's context mechanism. The handler layer retrieves this tenant DB from the context and creates fresh service and repository instances for each request. This means no tenant's data is ever visible to another tenant because the data access layer is always operating against their dedicated database. Services and repositories are never shared across tenants — they are created per-request with the correct database handle, making cross-tenant data leaks structurally impossible.

2. **How does the form builder handle different form types (Standard, HHE, RA, Assessment)?**
   - The system detects the form type at submission time and routes the data to the appropriate storage table using a strategy-like pattern. Standard form submissions go into the common `form_response` table. Assessment forms, which have multi-section container-based data, go into a dedicated `container_response` table with additional fields for section identifiers and container JSON. The Health-Hygiene-Equipment (HHE) forms are complex enough that they warranted an entirely separate module with its own service layer, response models, risk scale calculation logic, and auto-numbering. Regulatory Assessment (RA) forms store data in a `regulatory_form_response` table alongside supporting entities for flowcharts, assessment verdicts, and LLM-generated reports. Each form type also has specific handler methods that may accept different input shapes, but they all follow the same layered architecture pattern.

3. **How did you handle the "Save Form" flow supporting both create and update in one endpoint?**
   - The backend uses an upsert pattern: the same endpoint handles both creation and updates. The service method checks whether the incoming request contains an existing form identifier. If it does, the method treats it as an update and modifies the existing record with the new field values. If no identifier exists, it creates a brand new form record with freshly generated UUIDs and default versioning. This approach simplifies the frontend integration significantly — the UI can call the same endpoint whether the user is creating a new form from scratch or saving changes to an existing draft. It also makes the API idempotent for repeated save operations, which is important when dealing with unreliable network connections.

4. **Your form submissions support three different input formats (array, numeric-keyed object, single object). Why?**
   - This was a pragmatic decision driven by migration from a legacy NestJS frontend to a new React frontend. The old frontend sent submission data structured as an object with string-numbered keys like "0", "1", "2". The new frontend uses proper JSON arrays. Additionally, some third-party integrations or embedded form widgets might submit a single form response object directly. Rather than forcing all clients to adopt a single format and breaking backward compatibility, the handler auto-detects the incoming format by inspecting the JSON structure — if it starts with a square bracket it is an array, if it has numeric string keys it is the legacy format, otherwise it is a single object. The service normalizes all three into a consistent internal representation before processing.

5. **How does form inheritance work for Assessment forms?**
   - Assessment forms follow a template-child pattern where a parent form acts as a template. When a user initiates a new assessment, the inherit endpoint creates a deep copy of the parent form's layout components and configuration metadata into a new child form record. The child record stores a reference back to the parent through a parent identifier field. This allows the system to track which assessments originated from which template. The assessment details endpoint queries both the parent and all its inherited children together, making it possible to present a unified view of the template structure alongside all actual assessments. This parent-child chain is crucial for reporting and analytics, as it lets you see how many assessments were created from each template and their respective completion statuses.

6. **How did you design the AI-powered form generation from SOP documents?**
   - Users upload Standard Operating Procedure documents (docx, pdf, txt) through a multipart upload endpoint. The system extracts the text content using a file extraction module that handles different document formats. The extracted text is then sent to the Groq API with a carefully crafted system prompt that instructs the LLM to analyze the document and produce a structured JSON representation of a form — including suggested title, sections, field types, dropdown options, validation rules, and deadlines. The prompt enforces a strict JSON schema so the response is machine-parseable. The raw LLM response often wraps the JSON in markdown code blocks, so the system strips those before parsing. The entire operation is wrapped in a retry loop with exponential backoff: if the API returns a transient error (rate limit, server error, network timeout), it retries up to three times before giving up. This design balances ease of use — users can generate a complete form from a simple document — against the inherent unreliability of LLM APIs.

7. **How did you implement the concurrency limiter for AI generation?**
   - AI generation via Groq API is expensive — both in terms of cost and backend resources. Without a limiter, a malicious or buggy client could submit dozens of generation requests simultaneously, overwhelming the API budget and the backend. The system implements a dual-layer concurrency control. The first layer is a semaphore implemented as a buffered channel with a capacity of two, meaning only two AI generation requests can be in-flight at any time across the entire application. If a third request arrives while both slots are occupied, it blocks until one completes. The second layer is in-flight deduplication: before starting generation, the system computes a SHA-256 hash of the document content combined with the tenant and user identifiers. If an identical document is already being processed, the duplicate request is rejected with a HTTP 409 Conflict response. This prevents the system from doing wasted work on duplicate submissions, which commonly happens when users double-click upload buttons.

8. **What happens when the AI generation fails or returns invalid JSON?**
   - Failures are categorized into two types. Transient failures — API rate limiting, server 5xx errors, network timeouts — trigger automatic retries with increasing backoff delays, up to a maximum of three attempts. Permanent failures — such as the document being unreadable, empty, or in an unsupported format — are returned to the client immediately without retry. If the LLM responds but the JSON is malformed or doesn't match the expected schema, that is also treated as a permanent failure after the retry limit is exhausted because retrying with the same document is unlikely to produce a different result. All errors are wrapped in a structured error type that carries an HTTP status code, an application-specific error code, a human-readable message, and the underlying cause. This allows the frontend to display meaningful error messages and take appropriate actions like asking the user to modify their document and retry.

9. **How did you design the auto-number generation for HHE forms?**
   - HHE forms require sequential, human-readable identifiers like "HHE-005-2025" for tracking and compliance purposes. The system queries the most recent response record from the HHE responses table, then uses a regular expression to extract the numeric portion from the existing identifier — for example, extracting 5 from "HHE-005-2025". It increments that number and formats it with leading zeros to maintain consistent width. The number is combined with a configurable prefix and optional suffix, so the pattern can be customized per form template by storing the format configuration in the form_fields metadata as JSON. This design keeps the numbering logic simple and predictable while remaining flexible enough to support different numbering schemes across different HHE form templates.

10. **How does section-level access control work?**
    - Forms with multiple sections need fine-grained control over who can edit which section. The system uses a dedicated section_accessibility table that tracks assignments at the user level for each form section. Each record has a submit flag that acts as a lock: when set to 1, the section is submitted and becomes read-only; when set to 0, it remains editable. The unlock edit mode endpoint provides a way to reopen a submitted section, supporting two paths — one through the section_accessibility table directly and another through the container_response table for Assessment forms. If the first path fails, the system falls back to the second automatically. For forms with many sections, the system supports bulk assignment, allowing a user to be assigned to multiple sections in a single API call.

11. **How do you handle S3 file uploads? What's the folder structure?**
    - Files are organized in S3 using a tenant-scoped folder structure: each tenant gets its own prefix based on their unique slug identifier. Within that prefix, files are stored with UUID-based filenames to prevent name collisions and path traversal attacks. The upload handler supports both single file upload (using a "file" form field) and multi-file upload (using a "files" form field), auto-detecting which one the client sent. Beyond basic upload, the system provides presigned URLs for secure temporary access without exposing S3 credentials, batch delete for cleaning up multiple files at once, and a fallback mechanism to a legacy S3 bucket for backward compatibility during migration. Everything is tenant-scoped to maintain data isolation.

12. **How does the form builder handle audit logging?**
   - Every significant form operation generates an audit trail. The handler layer sets metadata on the request context — what action was performed, what type of resource was affected, and which resource identifier was involved. A middleware intercepts this metadata after the request completes and writes it to ClickHouse, which is the analytics database separate from the operational PostgreSQL database. This separation prevents audit writes from competing with transactional database operations for resources. The audit logs can be queried through a dedicated endpoint that accepts tenant, form, and date range filters. The endpoint also filters out noise events like "Listed" (user viewed the list) and "View" (user opened a form detail) to keep the audit display focused on meaningful mutations.

13. **How do you handle form duplication and merging?**
   - Duplicating a form creates a complete copy with a "(Copy)" suffix appended to the title, freshly generated UUIDs for all entities, and a reset version number. This provides a quick way to create new forms based on existing ones without starting from scratch. Merging two forms combines their layout component structures by merging the JSONB arrays that define the form fields and their organization. After the merge, the second form is soft-deleted so it no longer appears in listings but can be recovered if needed. Both operations preserve the original form metadata like type, tags, and configuration settings, ensuring that the duplicated or merged form behaves identically to the original in terms of submission handling.

14. **What happens when the LLM API for report generation is down?**
   - The LLM agent service is designed for synchronous operation — when a report generation request comes in, it calls the external LLM API and waits for the response. If the API is unavailable, the request will eventually time out based on the HTTP client configuration, and the error is propagated back to the frontend. The service does expose a health check endpoint that the frontend can use to probe availability before attempting generation. However, there is currently no queue mechanism or retry schedule for failed generations — the frontend would need to retry manually. This is an acknowledged limitation, and a future improvement would be to implement an asynchronous job queue where generation requests are persisted and processed by background workers with automatic retry logic.

15. **How did you ensure NestJS compatibility in pagination responses?**
   - During the migration from NestJS to Go, the frontend team needed time to update their API calls. To avoid a big-bang cutover, the system provides two parallel list endpoints. The standard endpoint returns pagination in a page-and-perPage format. A second endpoint, specifically for the legacy frontend, returns data in the NestJS format with rows and totalFormCount fields. This second endpoint also runs additional analytics queries that compute per-form-type counts with trend data — showing how many forms of each type exist and how those counts changed compared to the previous month and week. This dual-endpoint approach allowed the frontend migration to happen incrementally without blocking releases.

16. **How does the form data submission ensure data integrity across multiple tables?**
   - Standard form submissions write to a single table, so integrity is inherently maintained by the database. Assessment form submissions are more complex: they write to both the container_response table and must update the section_accessibility table to mark the section as submitted. Currently, these two operations are not wrapped in a database transaction. If the section accessibility update fails after the container response is written, the system ends up in an inconsistent state — a response exists but the section remains editable. This is a known gap in the current implementation. A proper fix would wrap both operations in a GORM transaction so that either both succeed or both are rolled back. In practice, this edge case is rare because the section update is a simple single-row operation that almost always succeeds.

17. **How did you design the Container Response detail extraction with fallback strategies?**
   - Assessment container data has evolved across multiple schema versions. When the frontend requests container details, the system tries three strategies in order. First, it attempts to read data directly from the container_data JSONB field — this is the current schema and works for all newly created responses. If that field is empty or absent, it tries the legacy data JSONB field that was used in an earlier version of the schema. If neither field contains usable data, it falls back to extracting the container structure from the form's layout components configuration, which defines the expected fields even if no data has been saved yet. This multi-tier fallback approach allows the system to serve responses from any point in the application's history without requiring complex data migration scripts.

18. **What's your approach to handling form completion and final summaries?**
   - When a user marks a form as complete, the system updates a completion counter on the form record. If the form requires a final summary — a detailed write-up of findings and conclusions — the summary is stored in a dedicated compilation_summary table. This table uses upsert semantics: creating a new record if none exists for this form, or updating the existing one if the user revisits and modifies their summary. The act of creating a compilation summary also atomically sets the form's completed status, ensuring the two pieces of state stay synchronized. This separation of the summary into its own table keeps the main form record lightweight and allows the summary to have its own lifecycle and audit trail.

19. **How would you scale the AI generation system if demand increases 10x?**
   - The current semaphore-based limiter with capacity 2 would become a bottleneck under 10x demand. The first improvement would be to increase the concurrent capacity while also horizontally scaling the backend instances behind a load balancer. Beyond that, the system should move from synchronous generation to an asynchronous job queue pattern. Generation requests would be persisted to a queue (RabbitMQ, SQS, or similar), and dedicated worker pods would consume from the queue at a controlled rate. This decouples the API response time from the generation time and provides natural retry, dead-letter, and monitoring capabilities. Additionally, a response cache for identical documents would eliminate redundant API calls — the current in-flight dedup only prevents duplicate concurrent work, not duplicate completed work.

20. **What are the bottlenecks in the current form response system?**
   - The form layout components are stored as a large JSONB field that grows with form complexity. Listing many forms means reading and potentially deserializing all this JSON data, which slows down list queries. The assessment container response detail extraction uses no pagination internally, so forms with hundreds of sections could cause slow responses. The three-format parsing in the submission handler adds complexity and a small but measurable overhead on every submission. Finally, the assessment fallback chain for container details runs sequentially through each fallback strategy, and with the current O(n) approach for each container, it does not scale well for large assessments. These are all areas identified for future optimization as the system grows.

## 19. Connectors V2 — Project-Specific Questions

1. **How did you design the zero-code connector architecture?**
   - The fundamental insight was that most file storage and CRM APIs follow similar REST patterns — list files, download files, search, authenticate. Instead of writing a separate Go adapter for each provider, the system stores the API behavior as configuration in the database. Each provider record has a JSONB column called api_endpoints that defines the base URL, authentication strategy, endpoint templates, response field mappings, and pagination behavior. A GenericRESTAdapter reads this configuration at runtime and executes the appropriate HTTP requests. Adding a new provider is purely a database operation — insert a new row with the correct configuration and the adapter handles everything. Custom adapters exist only for providers with distinctly non-RESTful APIs, like S3 with its AWS Signature V4 signing, Microsoft Graph with its special handling of OneDrive paths, and Salesforce with its SOQL query language. These custom adapters register themselves in an adapter registry and take precedence over the generic adapter through a fallback chain.

2. **How does the adapter fallback chain work?**
   - When a file browse request comes in for a specific provider, the system tries to find the best adapter in a multi-step process. First it checks for an exact match by provider slug in the custom adapter registry. If none is found, it tries the generic adapter with the provider's base URL. If that does not work, it tries a lowercase version of the slug, then checks for a SharePoint family fallback — since SharePoint and OneDrive share the same Microsoft Graph underpinnings, a request for one can often be handled by the other's adapter. The final fallback is always the generic adapter with no modifications. This layered approach means custom adapters can be added for specific providers when needed, but for any provider not covered by a custom adapter, the generic adapter will almost always work as long as the database configuration is correct.

3. **How did you implement multi-tenant OAuth?**
   - OAuth app credentials can exist at two levels. Platform-level credentials are shared across all tenants and serve as the default. Individual tenants can override with their own OAuth app credentials, which is useful when a customer wants to use their own registered application. The configuration repository implements a fallback: it first looks for a tenant-specific configuration, and if none exists, falls back to the platform-level global configuration. When building an authorization URL, the OAuth service resolves the correct configuration, generates a PKCE challenge for security, creates a CSRF state token that is stored in the database with a 10-minute expiry, and returns the full authorization URL to the frontend.

4. **How are OAuth tokens encrypted at rest?**
   - Security is critical for connector tokens because they grant access to external services like Google Drive and Salesforce. All tokens are encrypted using AES-256-GCM, which provides both confidentiality and authenticity verification. Each encryption generates a random 12-byte nonce, and the resulting ciphertext is stored alongside the nonce and authentication tag in a single encrypted blob. The tokens are encrypted before insertion into the database and decrypted on read. Beyond token encryption, OAuth client credentials are cached in memory with a 60-second time-to-live to avoid decrypting them from the database on every single API call. This caching dramatically reduces decryption overhead for frequently-used operations.

5. **How does token refresh work? Both proactive and lazy?**
   - Token refresh uses two complementary strategies. The proactive approach runs as a background cron job every 15 minutes. It queries all active tenants for connections whose tokens are expiring soon, then uses a bounded worker pool with up to 10 workers running in parallel to batch-refresh them. This keeps the majority of tokens fresh before they ever expire. The lazy approach operates at the individual API call level: before making any connector API call, the system checks whether the access token is expired. If it is, it performs an on-demand refresh. This handles tokens that expire between cron job runs, which typically happens when a user connects a new service shortly before a token's natural expiry. The two strategies together ensure that API calls almost always have a valid token available.

6. **How do you prevent duplicate concurrent token refreshes?**
   - Without protection, multiple concurrent API calls for the same connection could each detect an expired token and initiate a refresh simultaneously, causing multiple refresh requests to the provider — most of which would be wasted and could trigger rate limiting. The system uses a mutex-protected map to track which connections are currently being refreshed. When a request needs a fresh token, it first checks this map. If another request is already refreshing that connection, the caller waits and uses the result when it becomes available. This ensures at most one refresh request per connection at any time, regardless of how many concurrent API calls are in-flight.

7. **How did you design the GenericRESTAdapter? What makes it "generic"?**
   - The adapter is designed to be fully data-driven. It takes a provider configuration from the database that specifies everything needed to make API calls: the base URL, how to authenticate, the endpoints for each operation, how to extract items from responses, and how to map field names. It handles URL interpolation by replacing placeholder values like bucket names or paths with actual values from credentials. It handles response parsing by navigating the JSON hierarchy to find the items array at the configured path. It handles field mapping by translating provider-specific field names into a unified FileItem structure. It handles pagination by extracting next page tokens from responses and including them in subsequent requests. And it handles error mapping by converting HTTP error codes into structured application errors. Because all of this is driven by configuration, the adapter itself never needs code changes for new providers.

8. **How do the auth strategies plug into the HTTP requests?**
   - Authentication strategies are plugins that implement a simple contract: they sign an HTTP request using credentials and endpoint configuration. Six strategies are available. Bearer strategy adds an authorization header with the token, used by most modern APIs. Basic strategy uses base64-encoded credentials for legacy APIs. AWS V4 implements the full Signature Version 4 signing process for S3-compatible storage. Azure SAS appends a shared access signature token as query parameters. Azure Shared Key computes an HMAC-SHA256 signature based on the request content and headers. Custom Header uses a template-driven approach where the credential values are substituted into a header template string. The generic adapter selects the appropriate strategy by reading the auth_strategy field from the provider configuration, so adding a new strategy requires code but using it requires only a configuration change.

9. **How does the file browsing work without syncing files?**
   - The system uses a live browse pattern. When a user navigates through folders in the frontend, each request goes directly to the provider's API in real-time. The browse service resolves the appropriate adapter for the connection's provider, calls the list files method with the current folder path, and returns the results to the frontend. No files are stored in the local database — the entire operation is a proxy through the configured provider API. This has the advantage of always showing current data without any sync delay or storage overhead. The trade-off is that every browse request depends on the provider's API availability and response time. For slow providers or large directories, the request latency is directly visible to the user.

10. **How did you handle the Salesforce adapter's SOQL injection prevention?**
    - Salesforce uses SOQL, a SQL-like query language, and allowing user-influenced input to flow into SOQL queries would open the door to injection attacks. The system takes a defense-in-depth approach. Object names passed into queries are validated against a whitelist of known Salesforce objects rather than being interpolated directly. Sort column parameters are validated against a whitelist of allowed column names, and any input that does not match is rejected. Beyond these validations, no raw user input is ever concatenated into SOQL queries.

11. **How does the provider cache work?**
    - Provider configurations are read frequently — every file browse, download, or metadata operation needs to know the provider's API behavior. To avoid querying the master database on every request, the system maintains an in-memory cache with a 5-minute time-to-live. The cache is dual-indexed, meaning a provider can be looked up either by its database identifier or by its unique slug name. A background goroutine periodically scans the cache and removes expired entries. The cache is proactively invalidated when a provider is created, updated, or deleted through the admin API, ensuring that configuration changes propagate quickly.

12. **How do you handle provider configuration validation?**
    - Before a provider configuration is saved to the database, a validator checks its integrity. URL endpoint templates are checked to ensure they compile correctly — a malformed template with unmatched placeholders would cause runtime failures. The authentication strategy must be one of the registered strategies — an unknown strategy name means the adapter would not be able to sign requests. MIME type mappings, if present, must be valid format strings. The entire configuration schema must be valid JSON. These validations catch configuration errors at authoring time rather than at runtime.

13. **How is a connection's health status determined?**
    - The primary indicator of connection health is the token refresh outcome. If a refresh succeeds, the connection status is set to connected. If the provider returns an invalid_grant error, it means the user has revoked access or the authorization has expired — the connection is marked as expired and the user needs to re-authenticate. If the provider returns an invalid_client error, it means the OAuth application credentials are wrong — the connection is marked as error because administrative action is needed. The status update is performed in a best-effort manner and does not block the main flow.

14. **How would you add a new provider like Box or Dropbox?**
    - Adding a standard REST-based provider requires only a database operation. You create a new row in the connector_providers table with the provider's name and API base URL. You configure the authentication strategy, define the API endpoints for listing files, downloading, file search, and metadata. You optionally create OAuth credentials in the connector_configurations table. No Go code changes are required, no deployment is needed. The only time code changes would be necessary is if the provider uses a completely non-standard authentication or API structure.

15. **What happens when an OAuth authorization code expires before exchange?**
    - OAuth authorization codes are short-lived by design — typically expiring within 10 minutes. If the user takes too long to authorize in the browser, the code expires before the callback handler can exchange it for tokens. The system detects this by checking for the invalid_grant error response from the token endpoint. When detected, it returns a specific error to the frontend explaining that the authorization timed out, and the user is prompted to restart the OAuth flow. The CSRF state token is also time-limited with a 10-minute database-enforced expiry, providing defense in depth.

16. **How do you handle pagination for file browsing across different providers?**
    - Every provider API has its own pagination mechanism. Google Drive uses a nextPageToken. Dropbox uses a cursor. Some APIs use offset-based pagination. The provider configuration specifies the pagination type and the field names for the page token in the response and the corresponding request parameter. The generic adapter handles this transparently: it makes the initial request, extracts the next page token from the response at the configured path, includes it in the next request, and continues until either all pages are consumed or the number of results reaches the client-specified limit. The response returned to the frontend is a single merged array.

17. **What are the failure modes when a provider API is down?**
    - When a provider API is unreachable or returns errors, the system fails gracefully at every layer. The adapter returns a structured error with a specific error code from a predefined set. The handler maps this error code to an appropriate HTTP status — 502 for upstream failures, 503 for rate limiting, 401 for authentication errors. For token refresh failures, the connection status is updated and the cron-based proactive refresh retries on its next 15-minute cycle. The system never returns opaque errors.

18. **How is the api_endpoints JSONB structured?**
    - The configuration follows a template structure. There is a base URL for the provider's API. An authentication strategy is specified by name — this tells the generic adapter how to sign requests. For each operation like listing files, downloading, or fetching metadata, there is a nested object specifying the HTTP method, the URL path relative to the base URL, where in the JSON response to find the items array, and how to map the provider's field names to the system's unified field names. This structured approach means the adapter is fully data-driven — changing any API behavior requires only updating the database configuration, not deploying new code.

19. **How did you handle the encryption key rotation?**
    - The encryption service currently uses a single active AES key. Key rotation is handled as an offline administrative operation: the system is taken down, all encrypted tokens are decrypted with the old key, re-encrypted with the new key, and written back to the database. This approach is safe but requires downtime. A more robust future implementation would introduce key versioning, where each encrypted record stores which key was used to encrypt it, allowing rolling rotation without downtime.

20. **What are the bottlenecks in the current connectors architecture?**
    - File browsing is synchronous, so browsing a large directory on a slow provider can cause HTTP request timeouts. File downloads buffer entirely in memory before streaming to the client, which limits the size of files that can be transferred efficiently. The generic adapter processes API responses sequentially without streaming JSON parsing, meaning it loads full responses into memory before transforming them. The provider cache uses a fixed 5-minute time-to-live with no proactive invalidation mechanism, so updates to provider configuration take up to 5 minutes to propagate to all instances in a multi-replica deployment.

## 20. Task Management — Project-Specific Questions

1. **How did you design the task management system's architecture?**
   - The architecture follows a strict layered pattern with handler, service, repository, and model layers. A distinctive design choice is that handlers are not struct methods but plain package-level functions that receive both the Gin context and the task service as parameters. This is unusual but intentional: in a multi-tenant system where each tenant has a separate database, the service must be created per-request with the correct tenant database connection. If the handler held the service as a struct field, it would be shared across all requests and tenants. By passing the service as a parameter, each request can create a fresh service connected to the correct tenant database before calling the handler logic.

2. **How does multi-tenancy work in the task module?**
   - Every task record carries an organization identifier that scopes all operations. All list and detail queries filter by this identifier, so a user from one organization can never see tasks from another. The background reminder jobs present an interesting challenge — they must run across all tenants. These jobs use a tenant database manager that can resolve any tenant's database from their unique slug. The job iterates over all active tenants, creates a local repository for each, and processes their tasks independently. This ensures tenant isolation is maintained even in background processing.

3. **How did you implement the custom UUIDArray type for PostgreSQL?**
   - PostgreSQL supports UUID arrays natively, but GORM does not handle them out of the box. The system implements a custom type that satisfies all the interfaces GORM needs: it tells GORM what database type to use, it converts the Go slice to PostgreSQL array format when writing, it parses the PostgreSQL array format back when reading, and it handles JSON serialization for API responses. This integration allows the code to use native PostgreSQL operators like asking whether a value is contained in an array, which is essential for efficiently querying task assignments.

4. **How do you handle task assignment and permission checks for guests vs members?**
   - The system distinguishes between member users who belong to the organization and guest users who have limited access. Members can see tasks assigned to anyone in their organization. Guests can only see tasks they are assigned to or tasks they created. The list endpoint applies different filter logic based on the user type extracted from the authentication context. If a guest tries to list all tasks without a specific assignee filter, the system automatically restricts the results to tasks where they are the creator or an assignee. This is enforced at the query level, so there is no risk of data leaking through incorrect API usage.

5. **How does the notification system work? When are emails sent asynchronously?**
   - Notifications happen at multiple levels. In-app notifications are sent synchronously through a centralized notification dispatcher — these appear in the user's notification feed within the application. Email notifications are sent asynchronously using goroutines launched with the go keyword. The email sending is fire-and-forget: the task operation completes and returns to the user regardless of whether the email service is responsive. Before sending any notification, the system checks the user's notification preferences by querying dedicated preferences tables that store feature-level and event-level settings. Users can also mute notifications on a per-task basis.

6. **How did you design the task reminder cron jobs?**
   - A background job scheduler runs two categories of reminders. Every hour, it checks for tasks and subtasks that are due approximately one hour from now or approximately 24 hours from now and sends reminders to assignees. Once daily in the morning, it checks for tasks and subtasks that are already past due and sends overdue notifications. Both jobs iterate over all active tenant databases, query tasks that match the reminder criteria and are not yet completed, and send both in-app notifications and emails to the assignees. A mutex prevents the job from running concurrently if the previous execution is still in progress.

7. **How do you calculate task KPIs with week-over-week changes?**
   - The KPI calculation runs multiple counting queries across two time periods: the current week and the previous week. It calculates totals for tasks in each status category as well as overdue counts, high-priority counts, and tasks created this week versus this month. For each metric, it computes the percentage change from the previous week to show trends. The result includes both the absolute counts and the change indicators, so the frontend can display both the current state and whether things are improving or getting worse.

8. **How do you handle partial updates to tasks?**
   - When the frontend sends an update request, it includes only the fields that changed. The DTO uses pointer types for optional fields — a nil pointer means the field was not provided and should not be updated, while a non-nil pointer means the field should be set to the provided value. This allows the frontend to send partial updates without needing to read the full current state first. The service also diffs old and new values for assignees and status changes to send targeted notifications only to affected users.

9. **How does file attachment upload and storage work?**
   - File uploads are handled through a multipart form endpoint with a 32-megabyte maximum size. Files are stored in S3 organized by tenant-specific folder paths that separate attachments by their context — task attachments go in one folder, subtask attachments in another, discussion attachments in a third, and completion attachments in a fourth. Each attachment record in the database stores metadata including the original filename, size, MIME type, the S3 key, and the upload status. Completion attachments are specially flagged so the system can distinguish between working documents and final deliverables.

10. **How did you implement the pin/unpin feature?**
    - Rather than adding a boolean column to the tasks table, pinning uses a dedicated junction table that stores the user identifier, task identifier, and the timestamp when the task was pinned. This design allows each user to independently pin tasks without conflicting with other users' pin states. When a user toggles the pin state, the service checks whether a pin record exists and either creates or deletes it accordingly. Pin operations deliberately skip audit logging to reduce noise in the audit trail.

11. **How does the task completion flow work with final summaries?**
    - Completing a task accepts both a final summary text and optional completion attachments through a multipart form. The system sets the task status to completed, stores the summary text on the task record, and creates attachment records flagged as completion attachments. The endpoint is idempotent — if the task is already completed, it returns the existing completion data without modifying anything. This allows the frontend to safely retry the request on network failures.

12. **How do you handle the soft delete pattern differently from GORM's built-in?**
    - The system uses an explicit boolean column for soft deletion rather than GORM's built-in timestamp-based soft delete. This allows the code to have complete control over when and how deleted records are filtered. Hard deletion is a separate endpoint that permanently removes the record, but it only works if the record was already soft-deleted — this provides a safety net against accidental permanent deletion. The audit log uses GORM's built-in soft delete because audit records have different retention requirements.

13. **How does the audit trail capture user actions?**
    - Every handler sets metadata on the Gin context describing what action was performed, what type of resource was affected, which resource identifier was involved, and a human-readable message. The service layer has a helper method that reads this context metadata and creates an audit log record with the action type, entity type, entity identifier, the user's IP address, and a details field. If the audit log creation fails for any reason, the failure is silently logged and the main operation continues — the audit trail is important but should never block the user's work.

14. **How do you handle sorting in the task list endpoint?**
    - Sorting parameters from the frontend are validated against a whitelist of allowed column names before being used in the query. Any column name that does not match the whitelist is rejected to prevent SQL injection through the sort parameter. The query dynamically builds the ORDER BY clause from the validated parameters. The default sort is by last update time in descending order, showing the most recently modified tasks first. Multiple sort fields and sort directions are supported.

15. **What happens when an email notification fails?**
    - Email notifications are sent in goroutines with no error handling or retry mechanism. This is a deliberate trade-off: email delivery failures should never slow down or break the task operation that triggered them. If the email service is unavailable, the emails are simply lost and the user still receives the in-app notification, which is sent synchronously through the notification dispatcher. This design prioritizes API responsiveness and reliability over guaranteed email delivery.

16. **How would you implement a task due date escalation system?**
    - An escalation system would extend the existing reminder job infrastructure. Instead of a single overdue notification, there would be multiple escalation levels triggered at increasing thresholds — for example, 1 day overdue, 3 days overdue, and 7 days overdue. Each level would send increasingly urgent notifications. The system would track the last escalation level sent for each task to avoid sending duplicate notifications. At higher escalation levels, the notification could also include the task creator or the user's manager, ensuring that overdue tasks get visibility beyond just the assignee.

17. **What are the bottlenecks in the current task system?**
    - The assignee detail resolution uses a raw SQL query with multiple joins across several tables, which could become slow as the user base grows. The KPI calculation runs approximately 30 separate counting queries where a few well-designed queries could achieve the same result. Background email notifications use fire-and-forget goroutines without retry logic or dead-letter handling. Pagination uses the standard offset-and-limit approach, which degrades in performance as the page number increases because the database must scan and discard offset rows.

18. **How do you ensure data consistency when creating a task with attachments?**
    - Currently, task creation and attachment uploads are not wrapped in a single database transaction. If an S3 upload fails after the task record has been created, the task exists without its attachments. In practice, this is acceptable because the user can always add attachments later, but it is a known limitation. A more robust approach would sequence the operations: create the task record first, upload files to S3, and if any upload fails, mark the task to indicate incomplete attachment processing rather than leaving it in an ambiguous state.

19. **How does the user task count query work for guests vs members?**
    - The system uses PostgreSQL's unnest function to expand the UUID array column into individual rows for counting. For members, the count covers all tasks in the organization regardless of assignment. For guests, the scope is restricted to tasks where the guest is either the creator or an assignee. Both query paths return the same response structure — counts per status category — but the underlying data scope differs based on the user's role.

20. **What design decision would you change if you rebuilt the task module?**
    - Several architectural decisions would be different. The package-level handler functions that receive the service as a parameter work but make the code harder to test and maintain — proper dependency injection would be cleaner. Email notifications should go through a message queue rather than fire-and-forget goroutines, providing retry capability and delivery guarantees. Cursor-based pagination would replace offset-based pagination for consistent performance at scale. Real-time updates via WebSocket would replace the current pull-based refresh pattern. And multi-step operations like task creation with attachments should be wrapped in database transactions.

## 21. Inspection Readiness — Project-Specific Questions

1. **How does the scoring engine work? What data sources does it use?**
   - The scoring engine computes a manufacturer's inspection readiness by blending two very different data sources. The first source is industry-level regulatory data ingested into ClickHouse — FDA Warning Letters and Form 483 observations going back several years, categorized by quality system domains like CAPA, Design Control, Supplier Control, and others. The second source is the tenant's own audit findings stored in PostgreSQL, optionally enriched with vector embeddings generated by a BioBERT model. For each category, the engine computes an industry signal score based on how frequently observations occur in that area, and an OEM match score based on how similar the tenant's own findings are to the industry patterns. These two scores are blended together with a configurable weighting scheme, and a composite score from 0 to 100 is computed using a power mean across all categories.

2. **How did you handle the N+1 query problem in the scoring engine?**
   - The initial implementation made one ClickHouse query per category to fetch relevant observations, resulting in 13 separate queries for the full category set. This was clearly problematic — each query had network round-trip overhead and ClickHouse parsing cost. The optimization was straightforward but effective: fetch all observations in a single broad query, then partition them by category in memory using a map structure. This reduced ClickHouse queries from 13 down to 2 — one for category centroids and one for all observations. The in-memory partitioning adds negligible overhead compared to the savings in database round-trips.

3. **Why do you use both ClickHouse and PostgreSQL? How do you decide which data goes where?**
   - The two databases serve fundamentally different purposes. ClickHouse stores the regulatory observation data — hundreds of thousands of FDA Warning Letter and 483 records that are append-only and queried with analytical aggregations. ClickHouse's columnar storage and vectorized query execution make these analytical queries orders of magnitude faster than PostgreSQL would be. PostgreSQL stores the tenant-specific operational data — profiles, findings, scores, alerts, and matches — which are frequently updated, transactionally consistent, and relationally structured. This dual-database architecture means each workload runs on the storage engine optimized for its access pattern, which keeps both cost and performance in check.

4. **How does the embedding-based similarity matching work?**
   - When a tenant uploads audit findings, each finding's observation text is sent to a BioBERT API that converts the text into a high-dimensional vector embedding. The FDA Warning Letter observations in ClickHouse already have pre-computed embeddings from the same model. The scoring engine computes the centroid embedding for each quality system category by averaging the embeddings of all observations in that category. Then for each category, it finds the maximum cosine similarity between the tenant's findings and the category centroid — this becomes the OEM match score. The alert evaluator takes this further by computing cosine similarity between individual tenant findings and individual Warning Letter observations. If the similarity exceeds a threshold of 0.70, a match is recorded. If the finding's regulatory standard also matches the observation's CFR citations, the score gets a small boost.

5. **How did you implement the concurrency timeout for ClickHouse queries?**
   - ClickHouse is optimized for analytical throughput, not for low-latency queries. A complex aggregation over millions of observations could take several seconds. To prevent a slow ClickHouse query from blocking the entire scoring request indefinitely, the engine creates a derived context with an 8-second timeout specifically for ClickHouse operations. If ClickHouse does not respond within that window, the context is cancelled and the query fails. Importantly, this failure is handled gracefully — the engine logs a warning and continues scoring using only the data it already has. The OEM enrichment component is skipped, but the industry signal score is still computed. This graceful degradation ensures that a ClickHouse slowdown does not cause a complete scoring failure.

6. **How does the alert evaluator work? What are the four phases?**
   - The alert evaluator runs after scoring and checks for four conditions. Phase one is the cosine match evaluator: if the tenant has open audit findings, it computes similarity between those findings and all Warning Letter observations, creates match records for high-similarity pairs, and generates alerts for meaningful matches. Phase two activates only if there are no open findings: it checks for Code of Federal Regulations overlap between the tenant's device categories and recent observations, creating alerts for meaningful CFR intersections. Phase three checks whether the latest composite score increased by 15 or more points compared to the previous score within the last 30 days — a sharp increase warrants investigation. Phase four looks for Warning Letter clustering: if three or more Warning Letters appeared in the same quality system category within the last 90 days, that indicates a regulatory trend worth attention.

7. **How do you prevent alert fatigue? What grouping mechanism is used?**
   - A single Warning Letter can contain dozens of individual observations, each of which might match a tenant finding. Without grouping, this would generate a separate alert for every matching paragraph, overwhelming the user. The alert evaluator groups matches by document key — for Warning Letters, the key is the letter identifier; for 483 observations, it is the facility identifier combined with the inspection date. All matches against the same document produce a single grouped alert with a count rather than individual alerts. This grouping reduces what could be hundreds of alerts into a manageable handful, making the alert stream actionable rather than noisy.

8. **How did you design the BioBERT embedding generation? What happens if the BioBERT service is down?**
   - Embeddings are generated synchronously during the CSV upload process. Each row's observation text is sent to the BioBERT API, and the resulting embedding vector is stored alongside the finding. The API call has a 30-second timeout. If the BioBERT service is unavailable or returns an error, the finding is still created but without an embedding vector. The finding will participate in scoring only after the embedding is populated — either through a retry mechanism or by re-uploading. The synchronous approach is acceptable for the current scale of uploads, but it would become a bottleneck for large batches.

9. **How does the scoring quality label work? (high/medium/low)?**
   - The quality label reflects statistical confidence in the industry signal component of the score. It is calculated purely from the observation count: categories with 1000 or more observations get a high quality label, those with 500 to 999 get medium, and those with fewer than 500 get low. The rationale is that the industry frequency signal becomes more statistically reliable with more data points. A high quality score carries more weight in decision-making than a low quality score, even if the numeric values are similar.

10. **How is the composite score calculated? Why use a power mean?**
    - The composite is computed using a generalized mean formula where each category score is raised to the power of 2.5, the average is taken, and the result is raised to the reciprocal power. This power mean with an exponent greater than 1 gives more weight to higher category scores. An arithmetic mean would be pulled down by weak categories even if most categories score well. The power mean ensures that the composite reflects the true state of readiness: strengths are recognized, and weakness in a few areas does not disproportionately penalize the overall score. The exponent of 2.5 was chosen empirically to provide a sensible balance.

11. **What happens when a CSV upload has malformed rows?**
    - Each row in the uploaded CSV file is parsed independently. If a row has missing required fields, invalid data types, or fails embedding generation, it is skipped rather than causing the entire upload to fail. The system logs the error for debugging and continues with the next row. The response returns the count of successfully imported findings. The frontend can compare this count with the total rows in the file to determine how many rows were rejected and prompt the user to review and re-upload the failed rows.

12. **How do you ensure the scoring and alerting stays performant as data grows?**
    - Several design decisions keep performance in check. Observations are fetched in a single query rather than per category, eliminating the N+1 problem. In-memory partitioning handles categorization without additional database queries. Embedding similarity computations run in memory, which is fast enough at current data volumes without needing a PostgreSQL vector index. ClickHouse queries have timeouts to prevent runaway queries from consuming resources. And context propagation means that if the HTTP client disconnects, all downstream operations are cancelled immediately rather than continuing to consume resources.

13. **How would you handle running scoring for thousands of tenants?**
    - The current on-demand synchronous scoring model does not scale to thousands of tenants. A production-grade solution would convert scoring to an asynchronous job: the user triggers scoring, the request is queued, and the user is notified when the score is ready. Scoring could also be pre-computed on a schedule — nightly batch processing for all active profiles would ensure scores are always fresh without requiring manual triggering. Industry-level scores are the same for all tenants and could be pre-computed once and cached. Only the tenant-specific overlay would need to be computed per tenant, dramatically reducing per-tenant computational cost.

14. **How did you implement the CFR trend analytics?**
    - The trend analytics query ClickHouse grouped by fiscal year, using array intersection functions to match CFR citation codes. The trend endpoint returns year-by-year observation counts for a given CFR section, showing whether regulatory attention in that area is increasing or decreasing. A drill-down endpoint provides manufacturer-level breakdown — if a CFR section shows increasing trends, the user can see which manufacturers are driving that increase. The data is pre-aggregated in ClickHouse for performance, so trend queries run in milliseconds even over millions of observations.

15. **What is the difference between a Warning Letter match and a 483 observation match?**
    - Warning Letters are issued by the FDA after inspections that find significant violations. Each letter has a unique identifier and is treated as a single document. When the alert evaluator finds matches against a Warning Letter, matches are grouped by this letter identifier. Form 483 observations are individual inspection findings issued at the conclusion of an inspection. They are identified by the facility's FEI number combined with the inspection date. Both types of data share the same storage schema in ClickHouse but are differentiated by a source type field. The matching algorithm treats them the same way, but the grouping logic differs because they have different natural identifiers.

16. **How does the profile system work? What happens when you delete a profile with findings?**
    - Profiles are named groupings of device family codes that allow a tenant to score different product lines independently. A profile might group cardiovascular devices together and orthopedic devices separately. Each profile can have its own set of audit findings, scoring history, and alert configurations. When a profile is deleted, the system performs a cascade delete wrapped in a database transaction — all findings associated with that profile are deleted, all scores are deleted, and finally the profile itself is deleted. The transaction ensures atomicity: either all related data is removed cleanly or nothing is removed, preventing orphaned records.

17. **How do you handle the case where a tenant has no OEM findings?**
    - A tenant without their own audit findings might be new to the platform or might not have started their audit program yet. The scoring engine handles this case gracefully: the OEM match score for each category defaults to zero, and the blended category score is computed from the industry signal alone. The composite score will be lower than it would be for a tenant with findings, but it is still meaningful — it reflects the inherent regulatory risk of the tenant's device categories based purely on industry patterns. As the tenant adds their own findings, the score becomes increasingly personalized.

18. **What are the alert deduplication strategies?**
    - Before creating any alert, the evaluator checks whether an unacknowledged alert already exists for the same finding, the same Warning Letter trend category, or the same trigger condition. If an existing unacknowledged alert is found, the new alert is skipped. Once a user acknowledges an alert, it is marked as acknowledged and subsequent evaluation runs are free to create a new alert if conditions are still met. This approach prevents duplicate alerts from accumulating across multiple evaluation runs while still generating fresh alerts for acknowledged or resolved issues.

19. **How would you add a new scoring category?**
    - Adding a new quality system category does not require any code changes. The scoring engine reads categories dynamically from the centroid data in ClickHouse. To add a category, you would create the centroid embeddings for that category from the observation data, ensure ClickHouse has the expected data structure, and the scoring engine would automatically discover the new category on its next run. The only code change needed would be if you wanted to update the response DTO to include a user-friendly display name for the new category. This design makes it easy to extend the scoring model as regulatory requirements evolve.

20. **What are the current limitations of the inspection readiness module?**
    - Scoring is currently synchronous and blocks the HTTP response during ClickHouse queries, which can be slow for large data volumes. There is no vector index in PostgreSQL, so all embedding similarity computations are computed in memory with linear time complexity. The BioBERT embedding generation during CSV upload is synchronous and can timeout for large batches. The alert evaluator processes all findings from scratch on every run rather than computing deltas from the previous run. And all tenants use the same default scoring weights without the ability to customize sensitivity per category. These limitations are acceptable at current scale but would need to be addressed as adoption grows.

---

## Appendix: Interview Preparation Tips

### How to Use This Guide

1. **Start with your strongest topic** — build confidence.
2. **Practice coding problems daily** — LeetCode, HackerRank, Codeforces.
3. **Use the STAR method** for behavioral: Situation, Task, Action, Result.
4. **Draw diagrams** for system design — whiteboard or paper.
5. **Mock interviews** — pair with friends or use platforms like Pramp.
6. **Review fundamentals** before each interview round.

### Study Plans by Timeline

**2-Week Sprint (intensive):**
- Days 1-4: DSA fundamentals (arrays, strings, hash tables, trees)
- Days 5-7: System design basics + 2 mock designs
- Days 8-10: Language-specific (Go/Python) deep dive
- Days 11-12: Behavioral prep + 2 full mock interviews
- Days 13-14: Weak areas + company research

**1-Month Plan:**
- Week 1: DSA (all core data structures + 2 problems daily)
- Week 2: System design (5+ designs) + OS/Networking
- Week 3: Language-specific + Database + Backend
- Week 4: Mock interviews (3+ full loops) + Company prep

**3-Month Comprehensive:**
- Month 1: DSA mastery (50+ LeetCode problems, all patterns)
- Month 2: System design (10+ designs) + Deep fundamentals
- Month 3: Language mastery + Mock interviews + Weak areas

### Questions to Ask the Interviewer

- **For the role:** "What does a typical day/week look like for this role?"
- **For the team:** "How does the team handle on-call and incidents?"
- **For engineering:** "What's the biggest technical challenge the team faces?"
- **For growth:** "How is performance evaluated and what growth opportunities exist?"
- **For culture:** "How do teams collaborate across time zones?"

### Common Mistakes to Avoid

- Jumping into coding without clarifying requirements
- Not communicating your thought process during problem-solving
- Over-engineering solutions (premature optimization)
- Not handling edge cases explicitly
- Giving up too early on behavioral questions (silence is not ok)
- Not asking clarifying questions in system design
- Focusing only on correct output, ignoring complexity analysis
- Writing sloppy code (bad variable names, no structure) on the whiteboard

### Before the Interview Checklist

- [ ] Research the company: product, engineering blog, recent tech talks
- [ ] Research the interviewer (LinkedIn, common connections)
- [ ] Prepare 3-5 stories for behavioral (STAR method)
- [ ] Review your own resume — be ready to discuss everything
- [ ] Test your setup: camera, mic, internet, IDE/screen-share
- [ ] Have water, notebook, pen nearby
- [ ] Join the meeting 5 minutes early
- [ ] Prepare questions for the interviewer (see above)

### Key Resources

- **LeetCode** — coding problems & system design
- **InterviewBit** — topic-wise questions & mock interviews
- **Educative.io** — system design & design patterns courses
- **System Design Interview** (Alex Xu) — book & examples
- **Designing Data-Intensive Applications** (Kleppmann) — deep theory
- **Cracking the Coding Interview** (McDowell) — classic interview prep
- **High Scalability** — real-world architecture posts

### Company-Specific Prep

- **Google/Amazon/Meta/Microsoft** — LeetCode Hard + System Design
- **Startups** — full-stack knowledge, practical experience, culture fit
- **Fintech (Stripe, Square, PayPal)** — distributed transactions, idempotency, security
- **Infra/DevOps roles** — K8s, Terraform, CI/CD, monitoring
- **Database companies** — internals, query optimization, replication

---

> **Disclaimer**: This document aggregates questions from public interview prep resources (InterviewBit, LeetCode, GitHub, Educative, etc.) combined with expert-curated additions. Questions marked "Expert addition" are drawn from real-world experience. The market evolves — always cross-reference with recent interview experiences and job postings.
