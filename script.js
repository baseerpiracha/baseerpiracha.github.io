// Data Model 
const sections = [
  {
    id: 'about',
    title: 'About Me',
    content: `I'm an embedded firmware engineer with 6+ years experience building reliable, efficient systems for automotive and industrial domains. Proficient in C/C++, RTOS, embedded Linux, and communication protocols.`,
    type: 'text'
  },
  {
    id: 'experience',
    title: 'Experience',
    type: 'cards',
    cards: [
      {
        title: 'Innovative Systems, Riyadh',
        url: 'https://isys.sa',  // Company link here
        logo: 'isys.png',  // <-- your logo URL here
        subtitle: 'Senior Firmware Engineer — Aug 2023 – Present',
        points: [
          'Developed relay firmware on TI MSP430',
          'Implemented Modbus, RS485, USB bootloader, ANSI functions',
          'Tested on live power systems'
        ]
      },
      {
        title: 'Krämer Automotive Systems, Islamabad',
        url: 'https://kraemer-automotive.com',
        logo: 'kr.png',  // <-- your logo URL here
        subtitle: 'Embedded Software Engineer — Sep 2022 – Aug 2023',
        points: [
          'Worked on infotainment for Bentley & eGo',
          'Implemented CAN, signal timeout, secure boot',
          'Designed schematics and debugged circuits'
        ]
      },
      {
        title: 'Crypto Research & Development Center',
        url: 'https://nastp.gov.pk/',
        logo: 'crdc.png',  // <-- your logo URL here
        subtitle: 'Embedded Software Lead — April 2019 – Aug 2022',
        points: [
          'Led embedded projects on STM32, ESP32',
          'Secure communication firmware with AES-256, SHA-256',
          'Designed AI object detection on Raspberry Pi'
        ]
      }
    ]
  },
  {
    id: 'skills',
    title: 'Skills',
    type: 'tags',
    tags: [
      'C/C++', 'STM32', 'MSP430', 'RTOS', 'Modbus', 'Bootloader',
      'Embedded Linux', 'Python', 'CAN', 'SPI/I2C/UART'
    ]
  },
  {
    id: 'contact',
    title: 'Contact',
    type: 'text',
    content: `Email: <a href="mailto:baseer.piracha@gmail.com">baseer.piracha@gmail.com</a><br>
    Phone: +966 536014390<br>
    LinkedIn: <a href="https://www.linkedin.com/in/baseer-piracha/" target="_blank">baseer-piracha</a>`
  }
];

// Build Navigation
const navList = document.getElementById('nav-list');
sections.forEach(section => {
  const li = document.createElement('li');
  li.textContent = section.title;
  li.dataset.target = section.id;
  li.onclick = () => scrollToSection(section.id);
  navList.appendChild(li);
});

// Build Content Sections
const content = document.getElementById('content');
sections.forEach(section => {
  const sec = document.createElement('section');
  sec.id = section.id;
  sec.classList.add('section');

  const h2 = document.createElement('h2');
  h2.textContent = section.title;
  sec.appendChild(h2);

  if(section.type === 'text') {
    const p = document.createElement('p');
    p.innerHTML = section.content;
    sec.appendChild(p);
  } else if(section.type === 'cards') {
    const container = document.createElement('div');
    container.classList.add('exp-list');
    section.cards.forEach(card => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('exp-card');

      const title = document.createElement('h3');
      if(card.logo){
        const img = document.createElement('img');
        img.src = card.logo;
        img.alt = `${card.title} logo`;
        img.classList.add('company-logo');
        cardDiv.appendChild(img);
      }
      if(card.url){
        const link = document.createElement('a');
        link.href = card.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = card.title;
        link.classList.add('company-link');
        title.appendChild(link);
      } else {
        title.textContent = card.title;
      }
      cardDiv.appendChild(title);

      const sub = document.createElement('span');
      sub.textContent = card.subtitle;
      cardDiv.appendChild(sub);

      const ul = document.createElement('ul');
      card.points.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        ul.appendChild(li);
      });
      cardDiv.appendChild(ul);

      container.appendChild(cardDiv);
    });
    sec.appendChild(container);
  } else if(section.type === 'tags') {
    const tagsDiv = document.createElement('div');
    tagsDiv.classList.add('skills');
    section.tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.classList.add('skill-pill');
      tagSpan.textContent = tag;
      tagsDiv.appendChild(tagSpan);
    });
    sec.appendChild(tagsDiv);
  }

  content.appendChild(sec);
});

// Scroll helper
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Navbar active highlight on scroll
const navItems = navList.querySelectorAll('li');
const sectionElements = sections.map(s => document.getElementById(s.id));

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + window.innerHeight / 3;
  let current = null;
  for(let i = 0; i < sectionElements.length; i++) {
    const sec = sectionElements[i];
    if(sec.offsetTop <= scrollPos) {
      current = i;
    }
  }
  navItems.forEach(item => item.classList.remove('active'));
  if(current !== null && navItems[current]) navItems[current].classList.add('active');
});

// Contact Button Scroll
document.getElementById('contact-btn').addEventListener('click', () => {
  scrollToSection('contact');
});

// Dynamic background color shift on scroll for header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 50) {
    header.style.background = 'linear-gradient(90deg, #ff6a00, #ee0979)';
    header.style.boxShadow = '0 2px 25px #ee0979aa';
  } else {
    header.style.background = 'linear-gradient(90deg, #8338ec, #3a86ff)';
    header.style.boxShadow = '0 2px 15px rgba(131,56,236,0.5)';
  }
});