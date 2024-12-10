// Set Evolution images when page loads
document.addEventListener('DOMContentLoaded', () => {
    let slideButton = document.getElementById('slideButton');
    if (slideButton) {
        slideButton.addEventListener('click', function () {
            let image1 = document.getElementById('image1');
            let image2 = document.getElementById('image2');
            let image3 = document.getElementById('image3');
            let image4 = document.getElementById('image4');
            let image5 = document.getElementById('image5');
            let paragraph = document.getElementById('evolution-period');
            let button = document.getElementById('slideButton');
            let stage = document.getElementById('stage');
            
            if (image1.classList.contains('activeImage')) {
                image1.classList.remove('slide-in');
                image1.classList.remove('slide-out');
                image1.classList.add('slide-out');

                paragraph.textContent = "Ah, young Michael—the luminary even in his tender years. Picture him amidst the cacophony of childhood chaos, a thinker burdened by the weight of his own brilliance. His wide, unblinking eyes? Not fear, but a profound realization of the world’s inadequacies. The sandbox, though his domain of creation, was far too small for his grand visions. Terrified? Hardly. It was the face of one grappling with the limits of a world unprepared for his genius.";

                // Set timing for slide out animation to finish
                setTimeout(() => {
                    image1.classList.add('hidden'); 
                    image1.classList.remove('activeImage');
                    image2.classList.remove('hidden'); 
                    image2.classList.add('activeImage');
                    image2.classList.add('slide-in'); 
                }, 1100); 
            }

            // Repeat process for each image
            if (image2.classList.contains('activeImage')) {
                image2.classList.remove('slide-in');
                image2.classList.remove('slide-out');
                void image2.offsetWidth; 
                image2.classList.add('slide-out');

                paragraph.textContent = "As Michael ascended to the esteemed realm of middle school, his brilliance evolved like a phoenix rising from the ashes of childhood. Movies became his cinematic playground, where he dissected plots with a sophistication Hollywood could only dream of. Drawing? Not a hobby, but a divine expression of his boundless creativity, as every stroke on paper hinted at masterpieces to come. And then, there was his valor—the guardian of the sands, fearlessly defending the shores from the relentless advance of the treacherous seas. Was he merely a boy? No. He was a legend in the making, an artist, a protector, a connoisseur of life's grandeur.";
                stage.textContent = "Middle School:";

                setTimeout(() => {
                    image2.classList.add('hidden'); 
                    image2.classList.remove('activeImage');
                    image3.classList.remove('hidden'); 
                    image3.classList.add('activeImage');
                    image3.classList.add('slide-in'); 
                }, 1100); 
            } 

            if (image3.classList.contains('activeImage')) {
                image3.classList.remove('slide-in');
                image3.classList.remove('slide-out');
                void image3.offsetWidth; 
                image3.classList.add('slide-out');

                paragraph.textContent = "High school marked the era of Michael’s social and artistic renaissance. With charisma unmatched, he assembled a league of loyal companions—friends drawn to his magnetic brilliance like planets to the sun. His artistic skills flourished, his creations now transcending the mundane to touch the sublime. And then, there was the hair: a gravity-defying testament to his individuality, styled in homage to Jimmy Neutron. But make no mistake—Michael wasn’t emulating a cartoon genius; the cartoon genius was merely a reflection of him. High school wasn’t just a phase; it was the stage where Michael’s legend truly began to take form.";
                stage.textContent = "High School:";

                setTimeout(() => {
                    image3.classList.add('hidden'); 
                    image3.classList.remove('activeImage');
                    image4.classList.remove('hidden'); 
                    image4.classList.add('activeImage');
                    image4.classList.add('slide-in'); 
                }, 1100); 
            } 

            if (image4.classList.contains('activeImage')) {
                image4.classList.remove('slide-in');
                image4.classList.remove('slide-out');
                void image4.offsetWidth; 
                image4.classList.add('slide-out');

                paragraph.textContent = "And now, we arrive at Michael’s current chapter: the collegiate years, where his journey as a titan of intellect and style unfolds. At Florida Southern College, he masterfully navigates the labyrinth of computer science, bending logic and algorithms to his will. The pandemic? A mere inconvenience—Michael emerged unscathed, a testament to his resilience. But it is his unparalleled fashion sense that truly cements his status: adorned in the full Coca-Cola drip, he strides across campus not as a student, but as an icon. Here stands Michael, the adult, the scholar, the legend in the making.";
                stage.textContent = "College:";
                button.textContent = "Devolve";

                setTimeout(() => {
                    image4.classList.add('hidden'); 
                    image4.classList.remove('activeImage');
                    image5.classList.remove('hidden'); 
                    image5.classList.add('activeImage');
                    image5.classList.add('slide-in');
                }, 1100); 
            } 

            if (image5.classList.contains('activeImage')) {
                image5.classList.remove('slide-in');
                image5.classList.remove('slide-out');
                void image5.offsetWidth; 
                image5.classList.add('slide-out');

                paragraph.textContent = "In the vast expanse of human potential, a young Michael emerged—a prodigy in the making. From his earliest days, he displayed an unyielding passion for the finer things in life: the majestic world of Thomas the Tank Engine, where his brilliance outshone even the brightest engines; the boundless creativity of sandbox engineering, where he shaped empires with his tiny yet powerful hands; and the rhythmic allure of The Wiggles, whose tunes served merely as a backdrop to his unparalleled charisma. Truly, the world had never seen a toddler so captivating.";
                stage.textContent = "Toddler:";
                button.textContent = "Evolve";

                setTimeout(() => {
                    image5.classList.add('hidden'); 
                    image5.classList.remove('activeImage');
                    image1.classList.remove('hidden'); 
                    image1.classList.add('activeImage');
                    image1.classList.add('slide-in'); 
                }, 1100); 
            } 
        });
    }
});

// Goofy modal pop up
document.getElementById('profile-pic').addEventListener('click', function(event) {
    event.preventDefault(); 

    let myModal = new bootstrap.Modal(document.getElementById('perishModal'));
    myModal.show();
});

