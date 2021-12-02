const firebaseConfig = {
    apiKey: "AIzaSyBuBNnKt824CYo1MVNoa9QoG8DRvwPVs30",
    authDomain: "authentication-a15de.firebaseapp.com",
    projectId: "authentication-a15de",
    storageBucket: "authentication-a15de.appspot.com",
    messagingSenderId: "209432881038",
    appId: "1:209432881038:web:bb26c5dd3fc7cc6e2126df",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);