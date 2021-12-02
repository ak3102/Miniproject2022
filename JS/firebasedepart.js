const firebaseConfig = {
    apiKey: "AIzaSyDNrFAC_hHP8uvo5YQkMLIIdYAe-2RwmYs",
    authDomain: "department-auth.firebaseapp.com",
    projectId: "department-auth",
    storageBucket: "department-auth.appspot.com",
    messagingSenderId: "498094658611",
    appId: "1:498094658611:web:818f397e0abe8a7fc87f46"
  };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);