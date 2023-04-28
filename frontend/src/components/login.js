function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>

            <input type="submit" value="Login"/>
        </div>
      
    );
}
export default Login;