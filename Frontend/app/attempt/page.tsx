"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, CheckCircle, Eye, EyeOff } from "lucide-react"

export default function Component() {
  const [examPassword, setExamPassword] = useState("")
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setExamPassword(password)
    setShowError(false)
    setIsPasswordValid(password === "EXAM2024")
  }

  const handleAttemptExam = () => {
    if (!examPassword) {
      setShowError(true)
      return
    }
    if (!isPasswordValid) {
      setShowError(true)
      return
    }
    alert("Starting exam...")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-lg space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white mb-2">Computer Science Fundamentals</h1>
            <p className="text-gray-400 text-xl font-medium">Final Examination</p>
          </div>

          {/* Instructions */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-white">Examination Guidelines</h2>
            <div className="space-y-6">
              {[
                "Read all questions carefully before answering",
                "Navigate between questions using the navigation panel",
                "Progress is automatically saved every 30 seconds",
                "Submit before time expires - no refreshing or closing browser",
              ].map((instruction, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-200 leading-relaxed text-lg">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Password Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Authentication Required</h3>
              <p className="text-gray-400 text-lg">Enter the password provided by your instructor</p>
            </div>

            <div className="space-y-6">
              <div className="relative group">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter exam password"
                  value={examPassword}
                  onChange={handlePasswordChange}
                  className="w-full bg-black border-2 border-gray-700 text-white placeholder-gray-500 focus:border-white transition-all duration-300 py-6 px-6 text-xl pr-16"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                </button>
              </div>

              {isPasswordValid && (
                <div className="flex items-center space-x-3 text-green-400 animate-in fade-in duration-300">
                  <CheckCircle className="h-6 w-6" />
                  <span className="text-lg font-medium">Password verified successfully</span>
                </div>
              )}

              {showError && (
                <Alert className="bg-black border-2 border-red-600 animate-in fade-in duration-300">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <AlertDescription className="text-red-300 text-lg">
                    {!examPassword
                      ? "Please enter the exam password to continue"
                      : "Invalid password. Please check and try again."}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="space-y-6">
            <Button
              onClick={handleAttemptExam}
              disabled={!isPasswordValid}
              className="w-full bg-white text-black hover:bg-gray-200 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed font-semibold py-6 text-xl transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100"
              size="lg"
            >
              {isPasswordValid ? (
                <span className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-6 w-6" />
                  <span>Begin Examination</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-3">
                  <span>Enter Password to Continue</span>
                </span>
              )}
            </Button>

            {isPasswordValid && (
              <p className="text-center text-gray-400 text-lg animate-in fade-in duration-500">
                Your exam timer will start immediately upon clicking
              </p>
            )}
          </div>

          {/* Warning Notice */}
          <div className="border-2 border-yellow-600 p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-yellow-300 text-lg font-medium mb-2">Important Notice</p>
                <p className="text-yellow-200 text-base leading-relaxed">
                  Ensure you have a stable internet connection and are in a quiet environment before starting.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8">
            <p className="text-gray-500 text-lg">ExamPortal • Secure Online Assessment System</p>
          </div>
        </div>
      </div>
    </div>
  )
}
