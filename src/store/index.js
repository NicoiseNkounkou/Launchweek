import { createStore } from "vuex"

export default createStore({
    state: {
      journal: [
        
      ],
      contacts: [
        {
          nom: "Dentiste",
          numero: 1234567890,
        },
        {
          nom: "Medecin",
          numero: 2345678901,
        },
        {
          nom: "Veto",
          numero: 3456789012,
        },
      ],
    }
})