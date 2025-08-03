// Data Model
const sections = [
  {
    id: 'about',
    title: 'About Me',
    content: `I'm an Embedded Software Engineer with over 6 years of experience in developing robust firmware for safety-critical and resource-constrained systems in automotive, industrial automation, and defense applications. Proficient in C/C++, Python, and modern software engineering practices, I specialize in RTOS (FreeRTOS, Zephyr), embedded Linux (Yocto, Buildroot), and communication protocols (CAN, SPI, I2C, UART, MODBUS). I have hands-on expertise in hardware-software integration, low-level driver development, and compliance with functional safety standards like MISRA C, ISO 26262, and ANSI C. Adept at version control (Git), CI/CD pipelines, and Agile methodologies, I thrive in cross-functional teams delivering high-quality solutions from concept to production. I am actively seeking opportunities to contribute to innovative embedded systems projects.`,
    type: 'text'
  },
  {
    id: 'experience',
    title: 'Experience',
    type: 'cards',
    cards: [
      {
        title: 'Innovative Systems, Riyadh',
        url: 'https://isys.sa',
        logo: 'isys.png',
        subtitle: 'Senior Firmware Engineer — Aug 2023 – Present',
        points: [
          'Developed embedded Linux images using Yocto Project for TI Sitara AM335x (ARM Cortex-A8) processors, customizing systems with essential packages.',
          'Designed and implemented firmware for protection relays on TI MSP430 microcontrollers, ensuring compliance with IEC 61850 protocols.',
          'Optimized device drivers (DMA, SPI, I2C) for low-latency communication and efficient interrupt handling.',
          'Developed USB-based bootloaders and remote firmware update mechanisms for efficient updates.',
          'Integrated MODBUS and RS485 protocols for reliable communication in industrial systems.',
          'Conducted rigorous testing on live power systems to ensure stability and compliance.'
        ]
      },
      {
        title: 'Krämer Automotive Systems, Islamabad',
        url: 'https://kraemer-automotive.com',
        logo: 'kr.png',
        subtitle: 'Senior Embedded Software Engineer — Sep 2022 – Aug 2023',
        points: [
          'Developed firmware for vehicle infotainment systems using NXP S32K and STM32 (ARM Cortex-M) microcontrollers.',
          'Implemented a four-zone HVAC system with modular RTOS tasks, using queues, semaphores, and mutexes for inter-task communication.',
          'Designed multi-tasking RTOS architecture with precise timing using vTaskDelayUntil() and task prioritization, ensuring deterministic operation.',
          'Enhanced system reliability by 40% through CAN communication and signal timeout logic.',
          'Developed secure boot and bootloader mechanisms for programmer-less MCU firmware updates.',
          'Debugged and validated CAN data using Microchip CAN Analyzer and Vector CANalyzer.',
          'Contributed to Android-based infotainment features, achieving 98% test coverage with JUnit.',
          'Applied ISO 26262 standards for functional safety in automotive software development.'
        ]
      },
      {
        title: 'Crypto Research & Development Center, Islamabad',
        url: 'https://nastp.gov.pk/',
        logo: 'crdc.png',
        subtitle: 'Embedded Software Lead — Apr 2019 – Aug 2022',
        points: [
          'Led design, development, and testing of embedded systems, ensuring on-time delivery of secure firmware projects.',
          'Reverse-engineered radio protocols using a logic analyzer to implement secure communication firmware with AES-256, DES, and SHA-256.',
          'Developed image classification on Raspberry Pi using TensorFlow Lite for on-device AI object detection.',
          'Designed systems compliant with FIPS 140-2, ensuring high-security standards.',
          'Integrated BLE and Wi-Fi protocols, enhancing system connectivity.',
          'Implemented CVSD audio encoding, reducing bandwidth usage by 30%.',
          'Utilized UART, SPI, I2C, and I2S for efficient device communication.',
          'Developed firmware using C/C++ and Python, reducing testing time by 25%.',
          'Created schematics and PCB layouts in Altium and OrCAD, improving design accuracy.'
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
        tags: ['C/C++', 'Python', 'Java', 'Linux (Bash/Shell)']
      },
      {
        name: 'Microcontrollers',
        tags: ['TI MSP430', 'Atmel (8 & 32-bit)', 'NXP S32K', 'STM32', 'Beaglebone Black', 'Raspberry Pi', 'ESP32', 'Arduino']
      },
      {
        name: 'Operating Systems',
        tags: ['Yocto', 'Linux', 'FreeRTOS']
      },
      {
        name: 'Communication Protocols',
        tags: ['CAN', 'UART', 'SPI', 'I2S', 'MODBUS', 'RS485', 'I2C']
      },
      {
        name: 'Debuggers',
        tags: ['TI MSP-FET', 'ST-Link', 'Atmel ICE', 'Ozone J-Link', 'Logic Analyzer', 'CANoe', 'CAN Bus Analyzer']
      },
      {
        name: 'Project Management',
        tags: ['JIRA', 'SVN', 'Confluence', 'Git']
      }
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    type: 'cards',
    cards: [
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
      { language: 'German', listening: 'A1', reading: 'A1', spoken_production: 'A1', spoken_interaction: 'A1', writing: 'A1' }
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