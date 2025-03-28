import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (username === "" || password === "") {
      if (username === "") setUsernameError(true);
      if (password === "") setPasswordError(true);
      // alert("帳號或密碼不能為空");
    } else if (username === "user@example.com" && password === "strongpassword") {
      console.log(username +" \n"+ password )
      alert("登入成功");
    } else {
      alert("帳號或密碼錯誤");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          登入您的帳號
        </h2>


        {/* 帳號輸入框 */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">帳號</label>
          <input
            id="username"
            type="text"
            placeholder="請輸入信箱"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full p-4 border ${usernameError ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {usernameError && <p className="text-red-500 text-xs">請輸入有效的電子郵件地址</p>} {/* 顯示錯誤提示 */}
        </div>

        {/* 密碼輸入框 */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">密碼</label>
          <input
            id="password"
            type="password"
            placeholder="請輸入密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-4 border ${passwordError ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {passwordError && <p className="text-red-500 text-xs">請輸入密碼</p>} {/* 顯示錯誤提示 */}
        </div>

        {/* 登入按鈕 */}
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          登入
        </button>

        {/* 註冊按鈕 */}
        <div className="text-center mt-4">
          <button 
            className="text-blue-600 hover:text-blue-700"
            onClick={() => window.location.href = "/register"} 
          >沒有帳號？註冊</button>
        </div>
      </div>
    </div>
  );
}
