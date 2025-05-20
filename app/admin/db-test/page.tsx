// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

// export default function DbTestPage() {
//   const [isPrismaLoading, setPrismaLoading] = useState(false)
//   const [isSqlLoading, setSqlLoading] = useState(false)
//   const [prismaResult, setPrismaResult] = useState<{ success?: boolean; message?: string } | null>(null)
//   const [sqlResult, setSqlResult] = useState<{ success?: boolean; message?: string; data?: any } | null>(null)

//   const handleTestPrisma = async () => {
//     setPrismaLoading(true)
//     setPrismaResult(null)

//     try {
//       const result = await testPrismaConnection()
//       setPrismaResult(result)
//     } catch (error) {
//       setPrismaResult({ success: false, message: "An unexpected error occurred" })
//     } finally {
//       setPrismaLoading(false)
//     }
//   }

//   const handleTestSql = async () => {
//     setSqlLoading(true)
//     setSqlResult(null)

//     try {
//       const result = await testDirectSqlConnection()
//       setSqlResult(result)
//     } catch (error) {
//       setSqlResult({ success: false, message: "An unexpected error occurred" })
//     } finally {
//       setSqlLoading(false)
//     }
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <Card className="w-full max-w-md shadow-lg bg-white">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl font-bold text-center">Database Connection Test</CardTitle>
//           <CardDescription className="text-center">Test your Neon PostgreSQL connection</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           {prismaResult?.success === true && (
//             <Alert className="bg-green-50 border-green-200">
//               <CheckCircle className="h-4 w-4 text-green-600" />
//               <AlertTitle className="text-green-600">Prisma Connection Success!</AlertTitle>
//               <AlertDescription className="text-green-600">{prismaResult.message}</AlertDescription>
//             </Alert>
//           )}

//           {prismaResult?.success === false && (
//             <Alert className="bg-red-50 border-red-200">
//               <AlertCircle className="h-4 w-4 text-red-600" />
//               <AlertTitle className="text-red-600">Prisma Connection Error</AlertTitle>
//               <AlertDescription className="text-red-600">{prismaResult.message}</AlertDescription>
//             </Alert>
//           )}

//           {sqlResult?.success === true && (
//             <Alert className="bg-green-50 border-green-200">
//               <CheckCircle className="h-4 w-4 text-green-600" />
//               <AlertTitle className="text-green-600">SQL Connection Success!</AlertTitle>
//               <AlertDescription className="text-green-600">{sqlResult.message}</AlertDescription>
//             </Alert>
//           )}

//           {sqlResult?.success === false && (
//             <Alert className="bg-red-50 border-red-200">
//               <AlertCircle className="h-4 w-4 text-red-600" />
//               <AlertTitle className="text-red-600">SQL Connection Error</AlertTitle>
//               <AlertDescription className="text-red-600">{sqlResult.message}</AlertDescription>
//             </Alert>
//           )}

//           <div className="rounded-lg border p-4 bg-primary/5">
//             <h3 className="font-medium mb-2">About Neon PostgreSQL</h3>
//             <p className="text-sm text-gray-500 mb-2">
//               Your application is now configured to use Neon PostgreSQL. The database tables have been created:
//             </p>
//             <ul className="space-y-1 text-sm text-gray-500 list-disc pl-5">
//               <li>User table - Stores user information and authentication data</li>
//               <li>VerificationToken table - Manages email verification tokens</li>
//             </ul>
//           </div>
//         </CardContent>
//         <CardFooter className="flex gap-4">
//           <Button onClick={handleTestPrisma} className="flex-1" disabled={isPrismaLoading}>
//             {isPrismaLoading ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Testing Prisma...
//               </>
//             ) : (
//               "Test Prisma Connection"
//             )}
//           </Button>
//           <Button onClick={handleTestSql} className="flex-1" disabled={isSqlLoading}>
//             {isSqlLoading ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Testing SQL...
//               </>
//             ) : (
//               "Test SQL Connection"
//             )}
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }
