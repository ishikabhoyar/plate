"use client"

import { useState, useRef, useEffect } from "react"
import { Terminal, X, Minimize2, Square, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TerminalProps {
  className?: string
}

export function VSCodeTerminal({ className }: TerminalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Array<{ command: string; output: string; timestamp: Date }>>([
    {
      command: "Welcome to VS Code Terminal",
      output: "Type 'help' for available commands",
      timestamp: new Date()
    }
  ])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim()
    if (!trimmedCommand) return

    let output = ""
    
    switch (trimmedCommand.toLowerCase()) {
      case "help":
        output = `Available commands:
  help    - Show this help message
  clear   - Clear terminal history
  node    - Run Node.js REPL
  python  - Run Python interpreter
  npm     - Node package manager
  git     - Git version control
  ls      - List directory contents
  pwd     - Print working directory`
        break
      case "clear":
        setHistory([])
        setInput("")
        return
      case "node":
        output = "Node.js REPL started. Type JavaScript code or '.exit' to quit."
        break
      case "python":
        output = "Python interpreter started. Type Python code or 'exit()' to quit."
        break
      case "ls":
        output = `components/  app/  styles/  public/  package.json  tsconfig.json  tailwind.config.ts`
        break
      case "pwd":
        output = "/Users/ishikabhoyar/Desktop/plate"
        break
      case "npm -v":
        output = "10.2.4"
        break
      case "node -v":
        output = "v20.11.0"
        break
      case "git status":
        output = `On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   app/page.tsx
  modified:   components/code-editor.tsx
  modified:   components/plate-editor.tsx

no changes added to commit`
        break
      default:
        if (trimmedCommand.startsWith("npm ")) {
          output = `npm command: ${trimmedCommand}`
        } else if (trimmedCommand.startsWith("git ")) {
          output = `git command: ${trimmedCommand}`
        } else if (trimmedCommand.startsWith("node ")) {
          output = `Executing Node.js: ${trimmedCommand.slice(5)}`
        } else {
          output = `Command not found: ${trimmedCommand}. Type 'help' for available commands.`
        }
    }

    const newEntry = {
      command: trimmedCommand,
      output,
      timestamp: new Date()
    }

    setHistory(prev => [...prev, newEntry])
    setCommandHistory(prev => [...prev, trimmedCommand])
    setInput("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(input)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <div className={`flex flex-col h-full bg-black text-white font-mono text-sm ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-800 px-3 py-1 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span className="text-sm">Terminal</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-gray-700">
            <Minimize2 className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-gray-700">
            <Square className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-gray-700">
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-3 overflow-y-auto cursor-text"
        onClick={focusInput}
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center text-green-400">
              <span className="text-blue-400">user@vscode</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~/plate</span>
              <span className="text-white">$ </span>
              <span className="text-white">{entry.command}</span>
            </div>
            {entry.output && (
              <div className="text-gray-300 whitespace-pre-wrap ml-0 mt-1">
                {entry.output}
              </div>
            )}
          </div>
        ))}
        
        {/* Current Input Line */}
        <div className="flex items-center text-green-400">
          <span className="text-blue-400">user@vscode</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~/plate</span>
          <span className="text-white">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white ml-0"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  )
}
