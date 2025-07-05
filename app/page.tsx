"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Play, Send, ThumbsUp, ThumbsDown, MessageCircle, Bookmark, Moon, Sun } from "lucide-react"
import { PlateEditor } from "@/components/plate-editor"
import { CodeEditor } from "@/components/code-editor"
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
          <h1 className="text-xl font-bold">LeetCode</h1>
          <nav className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">Problems</span>
            <span className="text-muted-foreground">Contest</span>
            <span className="text-muted-foreground">Discuss</span>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Premium</Button>
        </div>
      </header>

      {/* Rest of the component remains the same */}
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {/* Left Panel - Problem Description */}
          <ResizablePanel defaultSize={45} minSize={30}>
            <div className="h-full flex flex-col">
              {/* Problem Header */}
              <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">1. Two Sum</h2>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setLiked(!liked)}
                      className={liked ? "text-green-600" : ""}
                    >
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      1.2k
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setDisliked(!disliked)}
                      className={disliked ? "text-red-600" : ""}
                    >
                      <ThumbsDown className="w-4 h-4 mr-1" />
                      89
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setBookmarked(!bookmarked)}
                      className={bookmarked ? "text-yellow-600" : ""}
                    >
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    Easy
                  </Badge>
                  <Badge variant="outline">Array</Badge>
                  <Badge variant="outline">Hash Table</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Acceptance Rate: 49.1% | Submissions: 8.2M | Accepted: 4.0M
                </div>
              </div>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
                <TabsList className="grid w-full grid-cols-4 mx-4 mt-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="editorial">Editorial</TabsTrigger>
                  <TabsTrigger value="solutions">Solutions</TabsTrigger>
                  <TabsTrigger value="submissions">Submissions</TabsTrigger>
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

              {/* Test Cases */}
              <div className="border-t">
                <Tabs defaultValue="testcase" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="testcase">Testcase</TabsTrigger>
                    <TabsTrigger value="result">Test Result</TabsTrigger>
                    <TabsTrigger value="console">Console</TabsTrigger>
                  </TabsList>
                  <TabsContent value="testcase" className="p-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Case 1</div>
                      <div className="bg-muted p-2 rounded text-sm font-mono">
                        <div>nums = [2,7,11,15]</div>
                        <div>target = 9</div>
                      </div>
                      <div className="text-sm text-muted-foreground">Expected: [0,1]</div>
                    </div>
                  </TabsContent>
                  <TabsContent value="result" className="p-4">
                    <div className="text-center text-muted-foreground py-4">
                      <Play className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>Run your code to see results</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="console" className="p-4">
                    <div className="bg-slate-900 dark:bg-slate-950 text-green-400 p-3 rounded font-mono text-sm min-h-[100px]">
                      <div className="opacity-50">Console output will appear here...</div>
                    </div>
                  </TabsContent>
                </Tabs>
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
