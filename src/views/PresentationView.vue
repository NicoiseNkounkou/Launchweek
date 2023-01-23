<template lang="">
    <div>
        <div>
            <img class="absolute left-0 top-0" src="/img/shadow.png" alt="">
        </div>
        <div class="absolute left-0 top-[1rem] ml-[5rem] flex items-center justify-right pb-3">
            <img src="/img/logo.png" alt="logo de l'asso entr'iim">
        </div>

        <div class="flex justify-evenly pt-[5rem] items-center ">
            <img class="w-[15rem]" src="/img/pageArticle.png" alt="image de la page article de l'app">
            <div class="flex justify-center flex-col gap-[5rem]">
                <img class="w-[35rem]" src="/img/utilisation.png" alt="">
                <img class="w-[35rem]" src="/img/usingText.png" alt="">
            </div>

        </div>
    </div>

    <section class="inline-block ml-[29rem] text-slate-700 h-[10rem] mb-96 ">
    <section class="flex justify-center  gap-[7rem] items-center pt-[2rem] mt-[7rem] p-[3rem] border-2 border-gray-600 rounded-lg">
        
    <div>
            <h2 class="font-semibold pb-2">Tailles</h2>
            <div class="box hidden">        
            
                <div>
                    <form >
                    <input class="cursor-pointer" type="checkbox" name="size" id="taille">
                    <label class="pl-3" for="taille">XS</label>
                    </form>
                </div>

                    <div>
                        <form>
                        <input class="cursor-pointer" type="checkbox" name="size" id="taille">
                        <label class="pl-3" for="taille">S</label>
                        </form>
                    </div>

                    <div>
                        <form>
                        <input class="cursor-pointer" type="checkbox" name="size" id="taille">
                        <label class="pl-3" for="taille">M</label>
                        </form>
                    </div>

                    <div>
                        <form>
                        <input class="cursor-pointer" type="checkbox" name="size" id="taille">
                        <label class="pl-3" for="taille">L</label>
                        </form>
                    </div>

                    <div>
                        <form>
                        <input class="cursor-pointer" type="checkbox" name="size" id="taille">
                        <label class="pl-3" for="taille">XL</label>
                        </form>
                    </div>

                    <button class="mt-[2rem] p-2 border-orange-400 bg-orange-400 border-2 rounded-lg cursor-pointer" type="submit">EFFACER </button>
            </div>
        </div>
        <div>
            <div class="flex justify-around">
                <h2 class="font-semibold pb-2">Couleurs</h2>
                <img class="bottom cursor-pointer block " @click="filter"  src="/img/arrow-down-s-line.png" alt="">
                <img class="top cursor-pointer hidden" @click="filter" src="/img/arrow-top-s-line.png" alt="">
            </div>
            <div class="boxes hidden ">
            <div>
                    <form>
                    <input class="cursor-pointer" type="checkbox" name="color" id="couleur">
                    <label class="pl-3" for="couleur">Bleu</label>
                    </form>
            </div>
            <div>
                    <form>
                    <input class="cursor-pointer" type="checkbox" name="color" id="couleur">
                    <label class="pl-3" for="couleur">Rouge</label>
                    </form>
            </div>
            <div>
                    <form>
                    <input class="cursor-pointer" type="checkbox" name="color" id="couleur">
                    <label class="pl-3" for="couleur">Rose</label>
                    </form>
            </div>
            <div>
                    <form>
                    <input class="cursor-pointer" type="checkbox" name="color" id="couleur">
                    <label class="pl-3" for="couleur">Vert</label>
                    </form>
            </div>
            <div>
                    <form>
                    <input class="cursor-pointer" type="checkbox" name="color" id="couleur">
                    <label class="pl-3" for="couleur">Jaune</label>
                    </form>

                    <button class="mt-[2rem] cursor-pointer p-2 border-orange-400 bg-orange-400  border-2 rounded-lg" type="submit">VALIDER </button>
            </div>


        </div>
    </div>
    
</section>
</section>
</template>
<script>
export default {
    methods: {
        filter() {
            let arrow = document.querySelector(".bottom")
            let arrowUp = document.querySelector(".top")
            let checkbox = document.querySelector(".box")
            let checkboxes = document.querySelector(".boxes")
            console.log(arrow, arrowUp, checkbox, checkboxes)
            if (arrow.classList.contains("block")) {
                arrow.style.display = "none"
                arrowUp.style.display = "block"
                checkbox.style.display = "block"
                checkboxes.style.display = "block"
            } else {
                arrow.style.display = "block"
                arrowUp.style.display = "none"
                checkbox.style.display = "none"
                checkboxes.style.display = "none"
            }
        }
    }

}

</script>
<style lang="">
    
</style>