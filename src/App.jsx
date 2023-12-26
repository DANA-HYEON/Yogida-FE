import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Notfound from './pages/Notfound';
import Layout from './components/commons/Layout';
import Mypage from './pages/mypage/Mypage';
import Filter from './pages/Filter';
import Login from './pages/Login';
import Schedule from './components/Mypage/Schedule';
import Signup from './pages/SignUp';
import FindPassword from './pages/FindPassword';
import CommentModal from './components/CommentModal/CommentModal';
import Detail from './pages/Detail';
import ChangePassword from './pages/ChangePassword';
import Notification from './pages/Notification';
import Map from './pages/Map';
import Setup from './pages/setup/Setup';
import { PATH } from './constants/path';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path={PATH.root} element={<Main />} />
          <Route path={PATH.mypage} element={<Mypage />} />
          <Route path={PATH.notification} element={<Notification />} />
        </Route>
        <Route path={PATH.post} element={<Detail />} />
        <Route path={PATH.notfound} element={<Notfound />} />
        <Route path={PATH.filter} element={<Filter />} />
        <Route path={PATH.schedule} element={<Schedule />} />
        <Route path={PATH.signup} element={<Signup />} />
        <Route path={PATH.findPassword} element={<FindPassword />} />
        <Route path={PATH.detail} element={<Detail />} />
        <Route path={PATH.changePassword} element={<ChangePassword />} />
        <Route path={PATH.commentModal} element={<CommentModal />} />
        <Route path={PATH.map} element={<Map />} />
        <Route path={PATH.setup} element={<Setup />} />
      </Route>
      <Route path={PATH.login} element={<Login />} />
    </Routes>
  );
}

export default App;
