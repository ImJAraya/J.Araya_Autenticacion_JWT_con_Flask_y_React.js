const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			crearUsuario: async (userData) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "api/user", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(userData)
					})
					if (!resp.ok) {
						throw new Error("Error creating user");
					}
					return alert("Usuario creado correctamente");
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			loginUsuario: async (userData) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(userData)
					})
					if (!resp.ok) {
						throw new Error("Error accedeindo al user");
					}
					let data = await resp.json();
					sessionStorage.setItem("token", data.token);
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			verificarToken: async () => {
				try {
					// fetching data from the backend
					const token = sessionStorage.getItem("token");
					const resp = await fetch(process.env.BACKEND_URL + "/api/user", {
						method: "GET",
						headers: {
							"Authorization": "Bearer " + token
						}
					});

					if (!resp.ok) {
						throw new Error("Error, token no es correcto");
					}
					let data = await resp.json();
					
					setStore({ info: data });
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			resetInfo: () => {
				setStore({
					...getStore(),   
					info: null           
				  });
				  
			}
		}
	};
};

export default getState;
