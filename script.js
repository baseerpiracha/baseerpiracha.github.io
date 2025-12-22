// Data Model
const sections = [
  {
    id: 'about',
    title: 'About Me',
    content: `Senior Embedded & Firmware Engineer with 7+ years of experience in automotive, telematics, industrial automation, and secure embedded systems. Specialized in CAN bus reverse engineering, protection relay firmware, and real-time embedded software development. Strong hands-on expertise in C/C++, Python, RTOS (FreeRTOS), embedded Linux (Yocto), and communication protocols including CAN, LIN, J1939, OBD-II, MODBUS, SPI, I2C, and UART. Experienced in ISO 26262, MISRA C, ANSI protection standards, and large-scale field deployments. Currently working in Riyadh on vehicle data, fleet telematics, and real-time embedded systems.`,
    type: 'text'
  },
  {
    id: 'experience',
    title: 'Experience',
    type: 'cards',
    cards: [
      {
        title: 'AFAQY CO IT, Riyadh',
        url: 'https://www.afaqy.com',
        logo: 'afaqy.jpeg',
        subtitle: 'Sr. R&D Engineer — Sep 2025 – Present',
        points: [
          'Reverse engineered CAN bus messages for Toyota, Hyundai, MG, Chevrolet, and Ford vehicles.',
          'Sniffed and decoded CAN traffic using CANalyzer, SavvyCAN, Vehicle Spy, and Python tools.',
          'Created and validated custom DBC files for telematics integration.',
          'Developed Xirgo and Galileosky scripts for real-time vehicle diagnostics and fleet analytics.',
          'Integrated BLE sensors and parsed advertisement and payload data.',
          'Worked with OBD-II, J1939, and proprietary vehicle protocols.',
          'Implemented vehicle event detection such as harsh braking, overspeed, and geofencing.',
          'Led field testing and large-scale deployments across Saudi Arabia.'
        ]
      },
      {
        title: 'Innovative Systems, Riyadh',
        url: 'https://www.isys.sa',
        logo: 'isys.png',
        subtitle: 'Sr. Firmware Engineer — Aug 2023 – Sep 2025',
        points: [
          'Designed and implemented firmware for protection relays on TI MSP430 microcontrollers.',
          'Implemented ANSI 49 / 50 / 51 / 52 protection algorithms.',
          'Developed secure bootloaders and firmware upgrade mechanisms.',
          'Integrated MODBUS and RS485 communication stacks.',
          'Implemented event logging, fault diagnostics, and oscillography.',
          'Built embedded Linux images using Yocto Project (BeagleBone Black).',
          'Performed EMI/EMC testing and live power system validation.'
        ]
      },
      {
        title: 'Krämer Automotive Systems, Islamabad',
        url: 'https://www.kraemer-automotive.com',
        logo: 'kr.png',
        subtitle: 'Sr. Embedded Software Engineer — Sep 2022 – Aug 2023',
        points: [
          'Developed firmware for automotive infotainment and instrument clusters.',
          'Worked on NXP S32K and STM32 (ARM Cortex-M) platforms.',
          'Implemented CAN, LIN, and UART communication stacks.',
          'Developed secure bootloaders for OTA and USB updates.',
          'Performed vehicle-level and HIL testing.',
          'Ensured ISO 26262 functional safety compliance.'
        ]
      },
      {
        title: 'Crypto Research & Development Center, Islamabad',
        url: 'www.https://nastp.gov.pk/',
        logo: 'crdc.png',
        subtitle: 'Embedded Software Lead — Apr 2019 – Aug 2022',
        points: [
          'Led secure embedded firmware projects for defense-grade systems.',
          'Reverse engineered communication protocols using logic analyzers and SDR tools.',
          'Implemented AES-256, SHA-256, and HMAC-based secure communication stacks.',
          'Developed low-power embedded firmware on AVR, ESP32, and ARM platforms.',
          'Built embedded AI applications using TensorFlow Lite on Raspberry Pi.',
          'Designed schematics and PCB layouts using Altium and OrCAD.'
        ]
      }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    type: 'cards',
    cards: [
      {
        title: 'MS Electrical Engineering',
        subtitle: 'National University of Science and Technology, Islamabad — Sep 2017 – Aug 2020',
        url: 'https://nust.edu.pk/',
        logo: 'nust.png',
        points: ['Specialized in embedded systems and signal processing.']
      },
      {
        title: 'BS Electrical Engineering',
        subtitle: 'COMSATS University, Islamabad — Feb 2013 – Mar 2017',
        url: 'https://www.comsats.edu.pk/',
        logo: 'comsats.png',
        points: ['Final Year Project: Implementation of OFDM-based Transceiver using USRP in LabVIEW.']
      }
    ]
  },  
  {
    id: 'skills',
    title: 'Skills',
    type: 'categories',
    categories: [
      {
        name: 'Programming Languages',
        tags: ['C/C++', 'Python', 'Bash', 'JavaScript', 'HTML/CSS']
      },
      {
        name: 'Microcontrollers & SoCs',
        tags: ['TI MSP430', 'STM32', 'NXP S32K', 'ESP32', 'AVR', 'BeagleBone Black', 'Raspberry Pi']
      },
      {
        name: 'Operating Systems',
        tags: ['FreeRTOS', 'Embedded Linux', 'Yocto']
      },
      {
        name: 'Communication Protocols',
        tags: ['CAN', 'CAN FD', 'LIN', 'J1939', 'OBD-II', 'UART', 'SPI', 'I2C', 'MODBUS', 'RS485', 'BLE']
      },
      {
        name: 'Tools & Debugging',
        tags: ['CANalyzer', 'CANoe', 'SavvyCAN', 'Vehicle Spy', 'Logic Analyzer', 'J-Link', 'ST-Link']
      },
      {
        name: 'DevOps & Management',
        tags: ['Git', 'GitHub Actions', 'Jenkins', 'JIRA', 'Confluence']
      }
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    type: 'cards',
    cards: [
      {
        title: 'Vehicle CAN Reverse Engineering',
        points: [
          'Decoded OEM vehicle CAN signals.',
          'Generated DBC files for telematics systems.',
          'Validated signals via live vehicle testing.'
        ]
      },
      {
        title: 'Protection Relay Firmware (MSP430)',
        points: [
          'Implemented ANSI protection algorithms.',
          'Developed fault logging and oscillography.'
        ]
      },
      {
        title: 'OFDM-based Transceiver using USRP in LabVIEW',
        subtitle: 'BS Electrical Engineering Final Year Project — COMSATS University',
        points: [
          'Designed and implemented an Orthogonal Frequency-Division Multiplexing (OFDM) transceiver.',
          'Utilized Universal Software Radio Peripheral (USRP) with LabVIEW for signal processing.',
          'Achieved reliable data transmission with real-time modulation and demodulation.'
        ]
      }
    ]
  },  
  {
    id: 'languages',
    title: 'Languages',
    type: 'table',
    table: [
      { language: 'Urdu', listening: 'Native', reading: 'Native', spoken_production: 'Native', spoken_interaction: 'Native', writing: 'Native' },
      { language: 'English', listening: 'C1', reading: 'C1', spoken_production: 'C1', spoken_interaction: 'C1', writing: 'C1' },
    ]
  },
  {
    id: 'contact',
    title: 'Contact',
    type: 'text',
    content: `Email: <a href="mailto:baseer.piracha@gmail.com">baseer.piracha@gmail.com</a><br>
    Phone: <a href="tel:+966536014390">+966 536014390</a><br>
    LinkedIn: <a href="https://www.linkedin.com/in/baseer-piracha/" target="_blank" rel="noopener noreferrer">baseer-piracha</a><br>
    Address: Riyadh, Saudi Arabia`
  }
];

// Build Navigation
const navList = document.getElementById('nav-list');
sections.forEach(section => {
  const li = document.createElement('li');
  li.textContent = section.title;
  li.dataset.target = section.id;
  li.setAttribute('tabindex', '0');
  li.addEventListener('click', () => scrollToSection(section.id));
  li.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      scrollToSection(section.id);
    }
  });
  navList.appendChild(li);
});

// Build Content Sections
const content = document.getElementById('content');
sections.forEach(section => {
  const sec = document.createElement('section');
  sec.id = section.id;
  sec.classList.add('section');
  sec.setAttribute('aria-labelledby', `${section.id}-title`);

  const h2 = document.createElement('h2');
  h2.id = `${section.id}-title`;
  h2.textContent = section.title;
  sec.appendChild(h2);

  if (section.type === 'text') {
    const p = document.createElement('p');
    p.innerHTML = section.content;
    sec.appendChild(p);
  } else if (section.type === 'cards') {
    const container = document.createElement('div');
    container.classList.add('exp-list');
    section.cards.forEach(card => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('exp-card');

      if (card.logo) {
        const img = document.createElement('img');
        img.src = card.logo;
        img.alt = `${card.title} logo`;
        img.classList.add('company-logo');
        img.setAttribute('loading', 'lazy');
        cardDiv.appendChild(img);
      }

      const title = document.createElement('h3');
      if (card.url) {
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
        li.innerHTML = point;
        ul.appendChild(li);
      });
      cardDiv.appendChild(ul);

      container.appendChild(cardDiv);
    });
    sec.appendChild(container);
  } else if (section.type === 'categories') {
    const categoriesDiv = document.createElement('div');
    categoriesDiv.classList.add('skills');
    section.categories.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('skill-category');

      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = category.name;
      categoryDiv.appendChild(categoryTitle);

      const tagsDiv = document.createElement('div');
      tagsDiv.classList.add('skill-tags');
      category.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.classList.add('skill-pill');
        tagSpan.textContent = tag;
        tagsDiv.appendChild(tagSpan);
      });
      categoryDiv.appendChild(tagsDiv);
      categoriesDiv.appendChild(categoryDiv);
    });
    sec.appendChild(categoriesDiv);
  } else if (section.type === 'table') {
    const table = document.createElement('table');
    table.classList.add('language-table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Language', 'Listening', 'Reading', 'Spoken Production', 'Spoken Interaction', 'Writing'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    section.table.forEach(row => {
      const tr = document.createElement('tr');
      Object.values(row).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    sec.appendChild(table);
  }

  content.appendChild(sec);
});

// Scroll Helper
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.nav-list').classList.remove('active');
  document.querySelector('.hamburger').classList.remove('active');
}

// Navbar Active Highlight on Scroll
const navItems = navList.querySelectorAll('li');
const sectionElements = sections.map(s => document.getElementById(s.id));

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + window.innerHeight / 3;
  let current = null;
  for (let i = 0; i < sectionElements.length; i++) {
    const sec = sectionElements[i];
    if (sec.offsetTop <= scrollPos) {
      current = i;
    }
  }
  navItems.forEach(item => item.classList.remove('active'));
  if (current !== null && navItems[current]) navItems[current].classList.add('active');
});

// Contact Button Scroll
document.getElementById('contact-btn').addEventListener('click', () => {
  scrollToSection('contact');
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Dynamic Background Color Shift on Scroll for Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'linear-gradient(90deg, #3498DB, #2C3E50)';
    header.style.boxShadow = '0 2px 15px rgba(52, 152, 219, 0.5)';
  } else {
    header.style.background = 'linear-gradient(90deg, #1A252F, #2C3E50)';
    header.style.boxShadow = '0 2px 10px rgba(44, 62, 80, 0.5)';
  }
});
