"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Play, Send, ThumbsUp, ThumbsDown, MessageCircle, Bookmark, Moon, Sun } from "lucide-react"
import { PlateEditor } from "@/components/plate-editor"
import { CodeEditor } from "@/components/code-editor"
import { VSCodeTerminal } from "@/components/vscode-terminal"
import { ThemeProvider } from "@/components/theme-provider"
import { useTheme } from "next-themes"

function LeetCodeContent() {
  const [activeTab, setActiveTab] = useState("description")
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">OnScreen Test</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </div>
      </header>

      {/* Rest of the component remains the same */}
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {/* Left Panel - Problem Description */}
          <ResizablePanel defaultSize={45} minSize={30}>
            <div className="h-full flex flex-col">
              {/* Problem Header */}
              <div className="p-3 border-b">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">1. Two Sum</h2>
                </div>
              </div>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
                <TabsList className="grid grid-cols-3 mx-4 mt-4">
                  <TabsTrigger value="description">Q.1</TabsTrigger>
                  <TabsTrigger value="editorial">Q.2</TabsTrigger>
                  <TabsTrigger value="solutions">Q.3</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="flex-1 overflow-auto p-4">
                  <PlateEditor />
                </TabsContent>

                <TabsContent value="editorial" className="flex-1 overflow-auto p-4">
                  <div className="text-center text-muted-foreground py-8">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Editorial content would go here</p>
                  </div>
                </TabsContent>

                <TabsContent value="solutions" className="flex-1 overflow-auto p-4">
                  <div className="text-center text-muted-foreground py-8">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Community solutions would go here</p>
                  </div>
                </TabsContent>

                <TabsContent value="submissions" className="flex-1 overflow-auto p-4">
                  <div className="text-center text-muted-foreground py-8">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Your submissions would go here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Right Panel - Code Editor */}
          <ResizablePanel defaultSize={55} minSize={40}>
            <div className="h-full flex flex-col">
              {/* Code Editor Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <select className="px-3 py-1 border rounded text-sm bg-background">
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>C++</option>
                  </select>
                  <Button variant="outline" size="sm">
                    Auto
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Play className="w-4 h-4 mr-1" />
                    Run
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Send className="w-4 h-4 mr-1" />
                    Submit
                  </Button>
                </div>
              </div>

              {/* Code Editor */}
              <div className="flex-1">
                <CodeEditor />
              </div>

              {/* VS Code Terminal */}
              <div className="border-t h-64">
                <VSCodeTerminal />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

export default function LeetCodeInterface() {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      disableTransitionOnChange
    >
      <LeetCodeContent />
    </ThemeProvider>
  )
}
