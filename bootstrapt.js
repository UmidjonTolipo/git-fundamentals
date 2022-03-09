function myFirstApp (name, age) {
    alert (`Salom mening ismim ${name} va men IT texnologiyalar bo'yicha yetakchi mutaxasisman`)
    

    function showSkills () {
        let skills = ['Taqdimotlar tayyorlash', 'Maqolalar chop etish', 'Dasturlar tuzish']
        for (let i = 0; i < skills.length; i++) {
            alert(`Men sizga taklif qiladigan hizmatlar ${skills[i]} `)
        }
    }
    showSkills()

    function checkAge() {

    }

    checkAge()

    function calcPow(num) {
        return num*num
    }
    console.log(calcPow(5))
}
myFirstApp('Axrorjon')

