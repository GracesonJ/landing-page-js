class Landing {
    //property
    database = {
        "Milan": { username: "milan", password: "milan123" },
        "Arun": { username: "arun", password: "arun123" },
        "Niha": { username: "niha", password: "niha123" },
        "John": { username: "john", password: "john123" },
        "Aami": { username: "aami", password: "aami123" }
    }

    //method to store data
    saveData() {
        if (this.database) {
            localStorage.setItem("database", JSON.stringify(this.database))
        }
    }

    // Method to get the stored data
    getData() {
        this.database = JSON.parse(localStorage.getItem("database"))
        console.log(this.database);
    }

    // Method to Register a user
    register() {
        console.log(regUser.value);
        console.log(regPwsd.value);
        if (regUser.value == "" || regPwsd.value == "") {
            alert(`fill the field completely`)
        } else {
            if (regUser.value in this.database) {
                alert(`Accound already exists`)
                window.location = "index.html"
            } else {
                this.database[regUser.value] = { username: regUser.value, password: regPwsd.value }
                this.saveData()
                alert(`Regstration Successfull`)
                window.location = 'index.html'
            }

        }
    }

    // Method to login a user
    login() {
        console.log(loginUser.value);
        console.log(loginPswd.value);
        if (loginUser.value == "" || loginPswd.value == "") {
            alert(`fill the field completely`)
        } else {
            if (loginUser.value in this.database) {
                if (this.database[loginUser.value].password == loginPswd.value) {
                    localStorage.setItem("user",loginUser.value)
                    alert(`Login Successfull`)
                    window.location = "home.html"
                } else {
                    alert(`Incorrect Username or Password`)

                }
            } else {
                alert(`Account Doesnot exits, Please Register`);
                
            }
        }
    }
}

const obj = new Landing()

obj.getData()
