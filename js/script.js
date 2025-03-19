// @ts-check

const the_cat_zodiacs = [
    {
        date: 'March 21 - April 20',
        name: 'Siamese',
        text: 'Like a Siamese, you have an energetic nature and tendency to take charge. You are often ethusiastic, energetic, and confident with adventurous sprit and leadership qualities. Because of this, you tend to be impulsive at times, with a "act first, think later" mindset. While you enjoy interacting with others, you are also content with being by yourself from time to time.',
        sound: 'sounds/eating.mp3'
    },
    {
        date: 'April 21 - May 20',
        name: 'Russian Blue',
        text: 'Like a Russian Blue, you tend to form deep, lasting bonds with people and are a bit reserved. You are typically known to be reliable, patient, and practical. While you are "down-to-earth" and tend to appreciate the finer things in life and taking a steady approach to it, you can be stubborn when you\'ve set your mind on something.',
        sound: 'sounds/eow.mp3'
    },
    {
        date: 'May 21 - June 20',
        name: 'Bengal',
        text: 'Like a Bengal, you are someone who is always looking for somehting exciting to do. You are a curious, adaptable, and energetic person who is good at talking with people. You tend to be social and quick-witted, with a restless energy for new experiences and constant change.',
        sound: 'sounds/vroom.mp3'
    },
    {
        date: 'June 21 - July 22',
        name: 'Ragdoll',
        text: 'Like a Ragdoll, you are a loyal and nurturing person who enjoys being a homebody. You are someone that values home, family, and security, which is why you tend to be loyal to your loved ones and are dependable when someone needs help. Because you deep care and concern for those you love, you are often times able to respond to the feelings of others strongly. Overall, you seek comfort and peace in your environment and feel the most at ease in familiar settings.',
        sound: 'sounds/motherly.mp3'
    },
    {
        date: 'July 23 - August 22',
        name: 'Ginger',
        text: 'Like a Ginger, you are known for your big, loyal personalities and love for attention. You are known for your confidence, generosity, and charisma. As a natural-born leader and a loyal person, you are often radiating warm energy that attracts others to you. You are also, at times, have a hint of expressing yourself in bold and dramatic ways and will stop at nothing to achieve your goals.',
        sound: 'sounds/orange.mp3'
    },
    {
        date: 'August 23 - September 22',
        name: 'British Shorthair',
        text: 'Like a British Shorthair, you are not overly demanding but enjoy attention when you seek it. You are a practical, detail-oriented, and analytical person who is known to be meticulous and calm. You appreciate order and cleanliness, and tend to be loyal to those you bond with.',
        sound: 'sounds/french.mp3'
    },
    {
        date: 'September 23 - October 22',
        name: 'Birman',
        text: 'Like a Birman, you are someone that\'s playful but not overly energetic and enjoys calm, peaceful environments. You tend to be charming, diplomatic, sociable, and most of all, balanced. You are someone that values harmony, aesthetics, and meaningful connections with others. You have a desire to maintain peace and try to be fair in all situations and avoid conflict if possible.',
        sound: 'sounds/gun.mp3'
    },
    {
        date: 'October 23 - November 21',
        name: 'Sphynx',
        text: 'Like a Sphynx, you have a bold, mysterious nature with strong personalities. You are a passionate and loyal person that is deeply emotional, observant, and often have a strong, magnetic presence. You are a natural, highly intuitive leader that is aware of your surroundings and can be strong-willed when need be.',
        sound: 'sounds/billy.mp3'
    },
    {
        date: 'November 22 - December 21',
        name: 'Somali',
        text: 'Like a Somali, you are someone that\'s adventurous and prefer to be free and with a sense of independence. You love exploring new places and ideas, with a strong desire for freedom. Because of this, you tend to be implusive with your decisions and this may lead to unintended problems.'
    },
    {
        date: 'December 22 - January 19',
        name: 'Main Coon',
        text: 'Like a Main Coon, you have a loyal, protective nature and while you enjoy independence, you can be affectionate with someone you trust. You are someone that\'s ambitious, disciplined, and practical, and often display a calm, serious demeanor. You value stability, responsibility, and hard work, and tend to be grounded and somewhat reserved.',
        sound: 'sounds/squishy.mp3'
    },
    {
        date: 'January 20 - February 18',
        name: 'Abyssinian',
        text: 'Like an Abyssinian, you are an energetic person who loves to explore and have new experiences. You are known to be innovative, independent, and intelligent. You are often seen as free-spirited and open-minded with an unconventional approach to life.',
        sound: 'sounds/ewiwi.mp3'
    },
    {
        date: 'February 19 - March 20',
        name: 'Scottish Fold',
        text: 'Like a Scottish Fold, you are someone that is compassionate and forms strong, emotional bonds with others. You tend to be empathetic, creative, sensitive, and have an intuitive nature. You enjoy forming strong connections with others without being overly demanding and are on the quieter side, which aligns with your gentle nature and peaceful energy. You have a strong connection to emotions and a love for the arts, and are often considered to be dreamy and compassionate.',
        sound: 'sounds/meme.mp3'
    }
];

/**
 * @param {number} month
 * @param {number} day
 */
function date_info(month, day) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
        return the_cat_zodiacs[0];
    } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
        return the_cat_zodiacs[1];
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return the_cat_zodiacs[2];
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return the_cat_zodiacs[3];
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return the_cat_zodiacs[4];
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return the_cat_zodiacs[5];
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return the_cat_zodiacs[6];
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return the_cat_zodiacs[7];
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return the_cat_zodiacs[8];
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return the_cat_zodiacs[9];
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return the_cat_zodiacs[10];
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return the_cat_zodiacs[11];
    } else return null;
}

const form = document.querySelector('form');
let all_sounds = [];            // empty array for the push and add of audio

function log_birthday(birthday) {
    console.log(birthday);
    const date = {
        year: birthday[0],
        month: birthday[1],
        day: birthday[2]
    };
    return date;
}

/**
 * @param {{ preventDefault: () => void; }} event
 */
function handle_submit(event) {
    event.preventDefault();             // prevents the form from automatically refreshing the page
    const date_object = log_birthday(form?.elements['birthday'].value.split('-'));
    const birthday = date_info(parseInt(date_object.month), parseInt(date_object.day));             // this connnects the submitted information with the correct cat

    if (birthday) {
        const info = document.getElementById('info');
        if (info) {
            info.innerHTML = `<h2> ${birthday.name} </h2> <h3> ${birthday.date} </h3> <p> ${birthday.text} </p>`;
        }
        const audio = new Audio(birthday.sound);
        all_sounds.push(audio);             // pushes and adds the audio into the all_sounds array for easier control
        stop_all_sounds();
        audio.play();
    }
}

if (form) {
    form.addEventListener('submit', handle_submit, false);
}

const my_cat = document.querySelectorAll('.cat-button');

for (let i = 0; i < the_cat_zodiacs.length; i++) {
    const image = my_cat[i];                            // so that when the user clicks, it will connect with individual images
    image.addEventListener('click', () => {
        const cat = the_cat_zodiacs[i];
        const info = document.getElementById('info');
        if (info) {
            info.innerHTML = `<h2> ${cat.name} </h2> <h3> ${cat.date} </h3> <p> ${cat.text} </p>`;
        }
    }, false);
}

function stop_all_sounds() {
    all_sounds.forEach((audio) => {     // loops through each audio to pause it and resets the time to 0
        audio.pause();
        audio.currentTime = 0;          // resets everything back to 0
    });
}

for (let i = 0; i < the_cat_zodiacs.length; i++) {
    const image = my_cat[i];                            // so that when the user clicks, it will connect with individual images
    image.addEventListener('click', () => {
        const cat = the_cat_zodiacs[i];
        const audio = new Audio(cat.sound);
        all_sounds.push(audio);             // pushes and adds the audio into the all_sounds array for easier control
        stop_all_sounds();
        audio.play();
    }, false);
}

const help_icon = document.getElementById('help-icon');

if (help_icon) {
    help_icon.addEventListener('click', () => {
        const screen = document.getElementById('help-screen');
        if (screen?.classList.contains("hidden")) {         // finds the class with hidden
            screen.classList.remove("hidden");              // removes the hidden class so then screen is visible
        }
        else {
            screen?.classList.add("hidden");                // if the screen is already visible, this makes it hidden again
        }
    });
}