
		function changeLanguage(language) {
        if (language === 'pl') {
            document.documentElement.lang = 'pl';
			document.querySelector('.nav_about').textContent = 'O mnie';
			document.querySelector('.nav_exp').textContent = 'Doświadczenie';
			document.querySelector('.nav_edu').textContent = 'Edukacja';
			document.querySelector('.nav_skills').textContent = 'Umiejętności';
			document.querySelector('.nav_portof').textContent = 'Portfolio';
			document.querySelector('.nav_intre').textContent = 'Zainteresowania';
			document.querySelector('.nav_cont').textContent = 'Kontakt';
			document.querySelector('.o_mnie').textContent = 'O mnie';
            document.querySelector('.text_o_mnie').textContent = 'Jestem studentem 3 roku Informatyki na wydziale Zastosowań Matematyki i Informatyki SGGW w Warszawie. Na codzień jestem osobą aktywną fizycznie, która łączy pasję do sportu z zainteresowaniem informatyką. Dzięki temu dziwnemu połączeniu mogę czerpać inspirację i rozwijać się lepiej w obydwu tych dziedzinach.';
			document.querySelector('.experience').textContent = 'Doświadczenie';
			document.querySelector('.st_3').textContent = 'Stanowisko 3';
			document.querySelector('.dt_3').textContent = 'Lipiec 2022 - Styczeń 2023';
			document.querySelector('.ot_3').textContent = 'Tutaj znajduje się opis stanowiska 3.';
			document.querySelector('.st_2').textContent = 'Stanowisko 2';
			document.querySelector('.dt_2').textContent = 'Styczeń 2023 - Kwiecień 2023';
			document.querySelector('.ot_2').textContent = 'Tutaj znajduje się opis stanowiska 2.';
			document.querySelector('.st_1').textContent = 'Projektant Stron WWW';
			document.querySelector('.dt_1').textContent = 'Kwiecień 2023 - Obecnie';
			document.querySelector('.ot_1').textContent = 'Tarvos Creation - WordPress';
			document.querySelector('.education').textContent = 'Edukacja';
			document.querySelector('.se_1').textContent = 'Licem Adama Mickiewicza';
			document.querySelector('.de_1').textContent = 'Wrzesień 2016 - Maj 2019';
			document.querySelector('.oe_1').textContent = 'IX Licem Adama Mickiewicza Warszawa';
			document.querySelector('.se_2').textContent = 'Cybernetyka WAT';
			document.querySelector('.de_2').textContent = 'Październik 2019 - Luty 2020';
			document.querySelector('.oe_2').textContent = 'Studia Inżynierskie';
			document.querySelector('.se_3').textContent = 'Informatyka SGGW';
			document.querySelector('.de_3').textContent = 'Październik 2020 - Obecnie';
			document.querySelector('.oe_3').textContent = 'Studia Inżynierskie';
			document.querySelector('.skills').textContent = 'Umiejętności';
			document.querySelector('.ang').textContent = 'Angielski B2';
			document.querySelector('.pol').textContent = 'Polski rodzimy';
			document.querySelector('.portfo').textContent = 'Moje portfolio';
			document.querySelector('.link1').textContent = 'Projekt 1';
			document.querySelector('.link2').textContent = 'Projekt 2';
			document.querySelector('.link3').textContent = 'Projekt 3';
			document.querySelector('.intres').textContent = 'Zainteresowania';
			document.querySelector('.int1').textContent = 'Informatyka';
			document.querySelector('.int2').textContent = 'Kino';
			document.querySelector('.kon').textContent = 'Kontakt';
			document.querySelector('.btn').textContent = 'Napisz do mnie!';
			document.querySelector('.stop').textContent = 'Strona stworzona przez Bartłomiej Witak.';
			document.querySelector('.wiadomosc-cookie').textContent = 'Ta strona korzysta z plików cookies. Kontynuując przeglądanie, wyrażasz zgodę na korzystanie z nich.';
			document.querySelector('.cookie-close-button').textContent = 'Zamknij';
		
		} else if (language === 'en') {
            document.documentElement.lang = 'en';
			document.querySelector('.nav_about').textContent = 'About me';
			document.querySelector('.nav_exp').textContent = 'Experience';
			document.querySelector('.nav_edu').textContent = 'Education';
			document.querySelector('.nav_skills').textContent = 'Skills';
			document.querySelector('.nav_portof').textContent = 'Portfolio';
			document.querySelector('.nav_intre').textContent = 'Interests';
			document.querySelector('.nav_cont').textContent = 'Contact';
			document.querySelector('.o_mnie').textContent = 'About me';
            document.querySelector('.text_o_mnie').textContent = 'I am a 3rd year student of Computer Science at the Faculty of Applied Mathematics and Informatics, Warsaw University of Life Sciences. I am an active person who combines a passion for sports with an interest in computer science. Thanks to this strange combination, I can draw inspiration and develop better in both of these fields.';
			document.querySelector('.experience').textContent = 'Experience';
			document.querySelector('.st_3').textContent = 'Position 3';
			document.querySelector('.dt_3').textContent = 'July 2022 - January 2023';
			document.querySelector('.ot_3').textContent = 'Job description 3.';
			document.querySelector('.st_2').textContent = 'Position 2';
			document.querySelector('.dt_2').textContent = 'January 2023 - April 2023';
			document.querySelector('.ot_2').textContent = 'Job description 2.';
			document.querySelector('.st_1').textContent = 'Web designer';
			document.querySelector('.dt_1').textContent = 'April 2023 - Currently';
			document.querySelector('.ot_1').textContent = 'Tarvos Creation - WordPress';
			document.querySelector('.education').textContent = 'Education';
			document.querySelector('.se_1').textContent = 'Adama Mickiewicza High Shool';
			document.querySelector('.de_1').textContent = 'September 2016 - May 2019';
			document.querySelector('.oe_1').textContent = 'IX Adama Mickiewicza High School Warsaw';
			document.querySelector('.se_2').textContent = 'Cybernetics WAT';
			document.querySelector('.de_2').textContent = 'October 2019 - February 2020';
			document.querySelector('.oe_2').textContent = 'Undergraduate Studies';
			document.querySelector('.se_3').textContent = 'Informatics SGGW';
			document.querySelector('.de_3').textContent = 'October 2020 - Currently';
			document.querySelector('.oe_3').textContent = 'Undergraduate Studies';
			document.querySelector('.skills').textContent = 'Skills';
			document.querySelector('.ang').textContent = 'English B2';
			document.querySelector('.pol').textContent = 'Polish native';
			document.querySelector('.portfo').textContent = 'My portfolio';
			document.querySelector('.link1').textContent = 'Project 1';
			document.querySelector('.link2').textContent = 'Project 2';
			document.querySelector('.link3').textContent = 'Project 3';
			document.querySelector('.intres').textContent = 'Intrests';
			document.querySelector('.int1').textContent = 'Informatics';
			document.querySelector('.int2').textContent = 'Cinema';
			document.querySelector('.kon').textContent = 'Contact';
			document.querySelector('.btn').textContent = 'Send me a message!';
			document.querySelector('.stop').textContent = 'Website made by Bartłomiej Witak.';
			document.querySelector('.wiadomosc-cookie').textContent = 'This website uses cookies. By continuing to browse, you consent to their use.';
			document.querySelector('.cookie-close-button').textContent = 'Close';
        }
    }

        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSectionId = link.getAttribute('href');
                const targetSection = document.querySelector(targetSectionId);
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            });
        });
		
		window.addEventListener('DOMContentLoaded', () => {
			const cookieNotification = document.createElement('div');
			cookieNotification.classList.add('cookie-notification');
			cookieNotification.innerHTML = `
				<p class="wiadomosc-cookie">Ta strona korzysta z plików cookies. Kontynuując przeglądanie, wyrażasz zgodę na korzystanie z nich.</p>
				<button class="cookie-close-button">Zamknij</button>
			`;

			cookieNotification.style.position = 'fixed';
			cookieNotification.style.bottom = '0';
			cookieNotification.style.left = '0';
			cookieNotification.style.width = '100%';
			cookieNotification.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
			cookieNotification.style.color = '#fff';
			cookieNotification.style.padding = '10px';
			cookieNotification.style.textAlign = 'center';

			const cookieCloseButton = cookieNotification.querySelector('.cookie-close-button');
			cookieCloseButton.addEventListener('click', () => {
				cookieNotification.style.display = 'none';
			});

			document.body.appendChild(cookieNotification);
		});