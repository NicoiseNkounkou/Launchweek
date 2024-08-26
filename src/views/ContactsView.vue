<!-- <template >
    <div>

        <div>
            <h1 class="text-3xl">CONTACTEZ L'ASSOCIATION</h1>
        </div>
        <form>
            <div class="form flex items-start flex-col pl-[5rem] pt-[2rem]">
                <input type="text" placeholder="Entrez votre prénom" required>

                <input class="mt-[1rem]" type="text" placeholder="Entrez Votre nom de famille">

                <input class="mt-[1rem]" type="email" placeholder="Entrez Votre addresse-mail" required>

                <div class="choice_section flex flex-col">
                <label class="mt-[1rem]" for="year">En quelle année êtes-vous ? </label>
                <select  name="level" id="year">
                    <option value="">Séléctionnez votre niveau d'étude</option>
                    <option value="first">A1</option>
                    <option value="second">A2</option>
                    <option value="third">A3</option>
                    <option value="fourth">A4</option>
                    <option value="fifth">A5</option>
                </select>
                </div>

                <div class="choice_section flex flex-col items-start">
                    <label class="mt-[1rem]" for="studies"> Dans quel axe êtes-vous ?</label>
                    <select name="type" id="studies">
                        <option value="">Séléctionnez votre axe d'étude</option>
                        <option value="first">Jeux Vidéos</option>
                        <option value="second">Communication digitale & e-business</option>
                        <option value="third">Coding & digital innovation</option>
                        <option value="fourth">Animation 3D</option>
                        <option value="fifth">Création & design</option>
                    </select>
                </div>
                <textarea class="message_box mt-[3rem] w-[50rem] h-[20rem] border-solid border-black" type="text" placeholder="Message" required></textarea>
            </div>
            <div class="button mt-[5rem]">
                <button class="border-solid border-black" type="submit" @click="SubmitEvent">Envoyer mon mesaage</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /* body{
        padding: 50px;
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    .choice_section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }

    .button {
        padding-top: 15px;
        margin: auto ;
        border: 2px solid black ;
        width: 150 px;
        height: 50px;
    }

    .message_box{
        width: 1050px;
        height: 500px
    }

input{
    border: 2px solid black;
    border-radius: 5px;
} */

</style> -->

<template>
    <div class="px-4 py-6 sm:px-6 lg:px-8">
        <div>
            <h1 class="text-3xl text-center sm:text-left">CONTACTEZ L'ASSOCIATION</h1>
        </div>
        <form class="mt-6 sm:mt-8 lg:mt-10">
            <div class="form flex flex-col sm:flex-row sm:flex-wrap sm:gap-4">
                <input type="text" placeholder="Entrez votre prénom" class="w-full sm:w-1/2 mb-4 sm:mb-0" required>

                <input class="w-full sm:w-1/2 mt-4 sm:mt-0" type="text" placeholder="Entrez Votre nom de famille">

                <input class="w-full sm:w-1/2 mt-4" type="email" placeholder="Entrez Votre adresse-mail" required>

                <div class="w-full sm:w-1/2 mt-4">
                    <label class="block" for="year">En quelle année êtes-vous ? </label>
                    <select name="level" id="year" class="w-full mt-2">
                        <option value="">Sélectionnez votre niveau d'étude</option>
                        <option value="first">A1</option>
                        <option value="second">A2</option>
                        <option value="third">A3</option>
                        <option value="fourth">A4</option>
                        <option value="fifth">A5</option>
                    </select>
                </div>

                <div class="w-full mt-4">
                    <label class="block" for="studies">Dans quel axe êtes-vous ?</label>
                    <select name="type" id="studies" class="w-full mt-2">
                        <option value="">Sélectionnez votre axe d'étude</option>
                        <option value="first">Jeux Vidéos</option>
                        <option value="second">Communication digitale & e-business</option>
                        <option value="third">Coding & digital innovation</option>
                        <option value="fourth">Animation 3D</option>
                        <option value="fifth">Création & design</option>
                    </select>
                </div>
                <textarea class="w-full mt-6 h-32 sm:h-40 lg:h-48 border border-black rounded" placeholder="Message" required></textarea>
            </div>
            <div class="flex justify-center sm:justify-start mt-6">
                <button class="px-6 py-2 bg-black text-white rounded hover:bg-gray-800" type="submit" @click="SubmitEvent">Envoyer mon message</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        SubmitEvent(event) {
            event.preventDefault();
            // Logic to handle form submission, such as sending data to an API
            console.log('Form submitted!');
        }
    }
}
</script>
