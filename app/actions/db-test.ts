// "use server"

// import { prisma } from "@/lib/db"
// import { sql } from "@/lib/db"

// export async function testPrismaConnection() {
//   try {
//     // Test Prisma connection by counting users
//     const userCount = await prisma.user.count()
//     return {
//       success: true,
//       message: `Connection successful. User count: ${userCount}`,
//     }
//   } catch (error) {
//     console.error("Prisma connection error:", error)
//     return {
//       success: false,
//       message: `Connection failed: ${error.message}`,
//     }
//   }
// }

// export async function testDirectSqlConnection() {
//   try {
//     // Test direct SQL connection
//     const result = await sql`SELECT COUNT(*) FROM "User"`
//     return {
//       success: true,
//       message: `SQL connection successful. User count: ${result[0].count}`,
//       data: result,
//     }
//   } catch (error) {
//     console.error("SQL connection error:", error)
//     return {
//       success: false,
//       message: `SQL connection failed: ${error.message}`,
//     }
//   }
// }
