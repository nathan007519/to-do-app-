import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"// pages/index.tsx
'use client';
import { useState } from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  // Add todo item
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now().toString(),
        text: input.trim(),
        completed: false
      }]);
      setInput('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Main Container */}
      <div className="glass-container relative z-10 w-full max-w-md">
        <div className="bg-black/30 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-white/10 shadow-[0px_4px_32px_0_rgba(255,255,255,.70)]">
        <h1 className="text-4xl font-bold text-white mb-6 text-center shadow-glow">
          Todo App
        </h1>

          {/* Input Section */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
              placeholder="Add a new task..."
            />


            {/* add button */}
            <button
              onClick={addTodo}
              className="px-6 py-3 bg-blue-500/90 hover:bg-blue-400/90 text-white rounded-lg transition-all duration-300 shadow-lg"
            >
              Add
            </button>
          </div>




          {/* Todo List */}
          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 group"
              >
                <div
                  className="flex items-center flex-1 cursor-pointer"
                  onClick={() => toggleTodo(todo.id)}
                >
                  <div className="relative w-5 h-5 mr-3">
                    <div className={`absolute inset-0 rounded-full border-2 transition-all ${
                      todo.completed ? 'border-green-400 bg-green-400/20' : 'border-white/70'
                    }`} />
                    {todo.completed && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                      </div>
                    )}
                  </div>
                  <span className={`text-white transition-all ${
                    todo.completed ? 'opacity-50 line-through' : 'opacity-90'
                  }`}>
                    {todo.text}
                  </span>
                </div>

                {/* delete button */}
                <button
                    onClick={() => deleteTodo(todo.id)} className="cursor-pointer bg-gradient-to-b from-red-500 to-red-600 shadow-[0px_4px_32px_0_rgba(255,0,0,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
                  >
                    <div className="relative overflow-hidden">
                      <p
                        className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                      >
                        Delete
                      </p>
                      <p
                        className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                      >
                         Delete
                      </p>
                    </div>
                  </button>
                 
                  
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-container {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(0, 0, 0, 0.3) 100%
          );
        }
      `}</style>
    </div>
  );
}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
