import { Route, Routes } from "react-router-dom"
import Login from "../Pages/Auth/Login"
import { AuthProvider } from "../Context/AuthContext"
import Register from "../Pages/Auth/Register"
import VerifyEmail from "../Pages/Auth/VerifyEmail"
import NotFound from "../Pages/NotFound"
import ForgotPassword from "../Pages/Auth/ForgotPassword"
import VerifyPasswordCode from "../Pages/Auth/VerifyPasswordCode"
import ResetPassword from "../Pages/Auth/ResetPassword"
import Layout from "../Layout/Layout"
import MyCourses from "../Pages/Student/MyCourses"
import Profile from "../Pages/Profile"
import { CategoryProvider } from "../Context/CourseCategoryContext"
import CategoryDetail from "../Pages/Student/CategorDetail"
import { CourseProvider } from "../Context/CourseContext"
import CourseDetail from "../Pages/CourseDetail"
import { PaymentProvider } from "../Context/PaymentContext"
import PaymentCallback from "../Pages/Student/PaymentCallback"
import { EnrollmentProvider } from "../Context/EnrollmentContext"
import CourseLearning from "../Pages/Student/CourseLearning"
import AddCategory from "../Pages/Admin/AddCategory"
import { AdminRoute, ProtectedRoute, StudentRoute } from "./Protected"
import Categories from "../Pages/Admin/Categories"
import AddCourse from "../Pages/Admin/AddCourses"
import Courses from "../Pages/Course/Courses"
import CourseInfo from "../Pages/Admin/CourseInfo"
import AddLesson from "../Pages/Admin/AddLesson"
import { LessonProvider } from "../Context/LessonContext"
import { UserProvider } from "../Context/UserContext"
import { AlertProvider } from "../Context/AlertContext"
import AdminDashboard from "../Pages/Admin/AdminDashboard"
import StudentDashboard from "../Pages/Student/StudentDashboard"

export const AppRoutes = () => {
    return (
        <AlertProvider>
            <AuthProvider>
                <UserProvider>
                    <CategoryProvider>
                        <CourseProvider>
                            <PaymentProvider>
                                <EnrollmentProvider>
                                    <LessonProvider>


                                        <Routes>
                                            <Route path="/login" element={<Login />} />
                                            <Route path="/register" element={<Register />} />
                                            <Route path="/verify-email" element={<VerifyEmail />} />
                                            <Route path="/forgot-password" element={<ForgotPassword />} />
                                            <Route path="/verify-token" element={<VerifyPasswordCode />} />
                                            <Route path="/reset-password" element={<ResetPassword />} />
                                            <Route path="*" element={<NotFound />} />


                                            <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                                                <Route path="/courses" element={<Courses />} />
                                                {/* Profile */}
                                                <Route path="/profile" element={<Profile />} />
                                            </Route>


                                            <Route element={<StudentRoute><Layout /></StudentRoute>}>
                                                {/* Dashboard */}
                                                <Route path="/me" element={<StudentDashboard />} />
                                                {/* Course Details */}
                                                <Route path="/courses/:id" element={<CourseDetail />} />
                                                {/* Category */}
                                                <Route path="/dashboacategory/:id" element={<CategoryDetail />} />
                                                {/* Purchased Courses */}
                                                <Route path="/my-courses" element={<MyCourses />} />
                                                {/* Learning */}
                                                <Route path="/learn/:id" element={<CourseLearning />} />
                                                {/* Payment */}
                                                <Route path="/payment/callback" element={<PaymentCallback />} />
                                                {/* Certificates 
                                                <Route path="/dashboard/certificates" element={<Certificates />} />
                                                */}

                                            </Route>


                                            <Route element={<AdminRoute><Layout /></AdminRoute>}>
                                                {/* Admin Dashboard */}
                                                <Route path="/admin" element={<AdminDashboard />} />
                                                {/* Categories */}
                                                <Route path="/admin/add-category" element={<AddCategory />} />
                                                <Route path="/admin/all-category" element={<Categories />} />
                                                {/* Courses */}
                                                <Route path="/admin/add-course" element={<AddCourse />} />
                                                <Route path="/admin/course/:courseId" element={<CourseInfo />} />
                                                <Route path="/course/edit/:courseId" element={<CourseInfo />} />
                                                {/* Lessons */}
                                                <Route path="/admin/add-lesson/:courseId" element={<AddLesson />} />
                                            </Route>
                                        </Routes>


                                    </LessonProvider>
                                </EnrollmentProvider>
                            </PaymentProvider>
                        </CourseProvider>
                    </CategoryProvider>
                </UserProvider>
            </AuthProvider>
        </AlertProvider>
    )
}
