import "./App.css";
import LoginPage from "./components/login-page/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ResetPassword from './components/ForgetPassword/ResetPassword'
import HomePage from "./components/HomePage/HomePage";
import ProfileDashboard from './components/ProfileDashboard/ProfileDashboard';
import CreateGroupPage from './components/TestForBackend/CreateGroup';
import QuizForm from "./components/TestForBackend/AddQuestionPage";
import GroupDashboard from "./components/Group/GroupDashboard/GroupDashboard"
import CreateQuiz from './components/Group/GroupDashboard/CreateQuiz';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AddQuestionPage from './components/TestForBackend/AddQuestionPage';

import {Toaster} from 'react-hot-toast';
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="SignUp" element={<SignUpPage />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          <Route path="ResetPassword" element={<ResetPassword/>}/>
          <Route path="Dashboard" element={<ProfileDashboard/>}/>
          <Route path="CreateGroup" element={<CreateGroupPage/>}/>
          <Route path="QuizForm" element={<QuizForm/>}/>
          <Route path="GroupDashboard" element={<GroupDashboard/>}/>
          <Route path="CreateQuiz" element={<CreateQuiz/>}/>
          <Route path="AddQuestionPage" element={<AddQuestionPage/>}/>

          
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </>
  );
}
 
 
export default App;