import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    // 用來追蹤錯誤提示
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

     // 驗證電子郵件格式的正則表達式
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    const handleRegister = () => {
        let hasError = false;
  
        // 驗證電子郵件格式
        if (username === "" || !emailRegex.test(username)) {
            setUsernameError(true);
            hasError = true;
        } else {
            setUsernameError(false);    
        }
  
        if (password === "") {
            setPasswordError(true);
            hasError = true;
        } else {
            setPasswordError(false);
        }

        if (confirmPassword === "") {
            setConfirmPasswordError(true);
            hasError = true;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError(true);
        hasError = true;
        } else {
            setConfirmPasswordError(false);
        }

        if (!hasError) {
        alert("註冊成功");
        } else {
        alert("請填寫完整的資料");
        }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          註冊帳號
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

        {/* 確認密碼輸入框 */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">確認密碼</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="再次確認密碼"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full p-4 border ${confirmPasswordError ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {confirmPasswordError && <p className="text-red-500 text-xs">密碼與確認密碼不一致</p>} {/* 顯示錯誤提示 */}
        </div>

        {/* 註冊按鈕 */}
        <button
          onClick={handleRegister}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          註冊
        </button>

        {/* 返回登入頁面 */}
        <div className="text-center mt-4">
          <button
            className="text-blue-600 hover:text-blue-700"
            onClick={() => window.location.href = "/login"} // 返回登入頁面
          >
            已有帳號？登入
          </button>
        </div>
      </div>
    </div>
  );
}
