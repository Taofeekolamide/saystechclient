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
import Dashboard from "../Pages/Student/StudentDashboard"
import MyCourses from "../Pages/Student/MyCourses"
import CourseList from "../Pages/Student/CourseList"
import Profile from "../Pages/Profile"
import { CategoryProvider } from "../Context/CourseCategoryContext"
import CategoryDetail from "../Pages/Student/CategorDetail"
import { CourseProvider } from "../Context/CourseContext"
import CourseDetail from "../Pages/Course/CourseDetail"
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
import Certificates from "../Pages/Student/Certificate"
import { AlertProvider } from "../Context/AlertContext"
import AdminDashboard from "../Pages/Admin/AdminDashboard"

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

                                            <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                                                <Route path="/courses" element={<Courses />} />
                                                <Route path="/course/:id" element={<CourseDetail />} />
                                            </Route>

                                            <Route element={<StudentRoute><Layout /></StudentRoute>}>
                                                <Route path="/me" element={<Dashboard />} />
                                                <Route path="/dashboard/category/:id" element={<CategoryDetail />} />
                                                <Route path="/dashboard/my-courses" element={<MyCourses />} />
                                                <Route path="/dashboard/courses" element={<CourseList />} />
                                                <Route path="/payment/callback" element={<PaymentCallback />} />
                                                <Route path="/dashboard/learn/:id" element={<CourseLearning />} />
                                                <Route path="/dashboard/certificates" element={<Certificates />} />
                                            </Route>


                                            <Route element={<AdminRoute><Layout /></AdminRoute>}>
                                                <Route path="/a" element={<AdminDashboard />} />

                                                <Route path="/admin/add-category" element={<AddCategory />} />
                                                <Route path="/admin/all-category" element={<Categories />} />

                                                <Route path="/admin/add-course" element={<AddCourse />} />

                                                <Route path="/admin/course/:courseId" element={<CourseInfo />} />

                                                <Route path="/admin/add-lesson/:courseId" element={<AddLesson />} />
                                            </Route>

                                            <Route element={<Layout />}>
                                                <Route path="/dashboard/profile" element={<Profile />} />
                                            </Route>

                                            <Route path="*" element={<NotFound />} />
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
