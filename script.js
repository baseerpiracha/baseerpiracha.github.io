// Updated Data Model with Latest CV Details
const sections = [
  {
    id: 'about',
    title: 'About Me',
    content: `Senior Embedded & Firmware Engineer with 8+ years of hands-on experience delivering high-reliability embedded systems across automotive telematics, industrial protection relays, secure communication, and Edge AI domains. Specialized in CAN bus reverse engineering, protection relay firmware, automotive infotainment, and military-grade secure embedded systems. Adept at developing real-time embedded software on ARM Cortex-M, MSP430, AVR, STM32, ESP32, NXP S32K, and NVIDIA Jetson platforms. Deep knowledge of communication protocols (CAN, LIN, J1939, OBD-II, MODBUS, SPI, I2C, UART, BLE). Experienced in ISO 26262, MISRA C, ANSI protection standards, secure boot, cryptography, and large-scale field deployments. Currently working in Riyadh on vehicle data, fleet telematics, real-time Edge AI, and computer vision solutions.`,
    type: 'text'
  },
  {
    id: 'experience',
    title: 'Experience',
    type: 'cards',
    cards: [
      {
        title: 'AFAQY IT CO',
        url: 'https://www.afaqy.com',
        logo: 'afaqy.jpeg',
        subtitle: 'Sr. R&D Engineer — September 2025 – Present',
        points: [
          'Led reverse engineering of CAN bus messages for Toyota, Hyundai, MG, Chevrolet, and Ford vehicles.',
          'Sniffed and decoded CAN traffic using CANalyzer, SavvyCAN, Vehicle Spy, and Python tools.',
          'Developed and validated custom DBC files for telematics integration.',
          'Designed real-time data scripts for Xirgo and Galileosky units.',
          'Integrated BLE sensors with advertisement and payload parsing.',
          'Validated OBD-II, J1939, and proprietary protocols.',
          'Developed Lua/Galileosky scripts for harsh braking and geofencing.',
          'Led large-scale field deployments across Saudi Arabia.',
          'Developed AI-based VIN and license plate detection using Python, YOLO, and OCR.',
          'Implemented VIN-aware validation logic and confidence-based character fusion.',
          'Automated batch image processing with Pandas and NumPy.'
        ]
      },
      {
        title: 'Innovative Systems',
        url: 'https://www.isys.sa',
        logo: 'isys.png',
        subtitle: 'Sr. Firmware Engineer — August 2023 – September 2025',
        points: [
          'Led Yocto-based Embedded Linux development for TI Sitara AM335x (kernel, device trees, custom layers).',
          'Designed IEC 61850-compliant real-time firmware and protection algorithms on TI MSP430.',
          'Developed low-latency drivers (DMA, SPI, I2C, UART) and secure USB/OTA bootloaders.',
          'Implemented Graphical Frameworks on TouchGFX for display of relay status and parameters.',
          'Developed and optimized firmware using FreeRTOS.',
          'Performed limited resources development with strict memory and timing constraints.',
          'Handled integration and debugging of sub-systems and peripherals.',
          'Automated CI/CD pipelines with Jenkins and GitHub Actions.'
        ]
      },
      {
        title: 'Krämer Automotive Systems GmbH',
        url: 'https://www.kraemer-automotive.com',
        logo: 'kr.png',
        subtitle: 'Sr. Embedded Software Engineer — September 2022 – August 2023',
        points: [
          'Developed firmware for infotainment systems on NXP S32K and STM32 microcontrollers.',
          'Optimized CAN, LIN, UART stacks with error detection and diagnostics.',
          'Developed secure bootloaders for OTA and USB updates.',
          'Validated CAN traffic using Microchip and Vector analyzers for OEM platforms.',
          'Implemented four-zone HVAC system with RTOS multitasking.',
          'Worked on Android-based automotive infotainment systems for system integration.',
          'Performed PCB debugging and hardware validation.',
          'Ensured ISO 26262 compliance with FMEA and safety mechanisms.',
          'Managed project lifecycle using Git, Jira, SVN, and Confluence.',
          'Conducted vehicle-level and HIL testing.'
        ]
      },
      {
        title: 'Crypto Research and Development Center',
        url: '',
        logo: 'crdc.png',
        subtitle: 'Embedded Software Lead — May 2021 – August 2022',
        points: [
          'Managed R&D projects for secure modules and embedded controllers.',
          'Led collaboration across hardware, software, RF, and QA teams.',
          'Mentored junior engineers on embedded systems and cryptography.',
          'Prepared technical documentation including architecture diagrams and APIs.',
          'Oversaw compliance with FIPS 140-2 and MIL-STD-461G standards.',
          'Deployed Python-based testing frameworks, reducing validation time by 25%.'
        ]
      },
      {
        title: 'Crypto Research and Development Center',
        url: '',
        logo: 'crdc.png',
        subtitle: 'Embedded Software Engineer — April 2019 – May 2021',
        points: [
          'Designed secure embedded systems compliant with military standards.',
          'Reverse-engineered communication protocols using analyzers and SDR tools.',
          'Developed cryptographic stacks using AES-256, SHA-256, and HMAC.',
          'Engineered firmware for AVR, ESP32, and ARM-based microcontrollers.',
          'Implemented low-power techniques for battery-powered field devices.',
          'Built embedded applications for secure audio systems and tracking units.',
          'Integrated UART, SPI, and CAN interfaces.',
          'Designed secure boot mechanisms using digital signatures.',
          'Conducted hardware design and schematic development using Altium and OrCAD.',
          'Deployed TensorFlow Lite AI models on Raspberry Pi platforms.'
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
        title: 'M.Sc. Electrical Engineering',
        subtitle: 'National University of Sciences & Technology (NUST), Islamabad — Sep 2017 – Aug 2020',
        url: 'https://nust.edu.pk/',
        logo: 'nust.png',
        points: ['GPA: 3.23/4.0 | First Class Honors']
      },
      {
        title: 'B.Sc. Electrical Engineering',
        subtitle: 'COMSATS University, Islamabad — Feb 2013 – Mar 2017',
        url: 'https://www.comsats.edu.pk/',
        logo: 'comsats.png',
        points: ['GPA: 3.41/4.0 | First Class Honors | Final Year Project: OFDM-based Transceiver using USRP in LabVIEW']
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
        tags: ['C/C++ (MISRA)', 'Python', 'Bash', 'JavaScript']
      },
      {
        name: 'Microcontrollers & Platforms',
        tags: ['STM32', 'NXP S32K', 'TI MSP430', 'ESP32', 'NVIDIA Jetson Orin Nano', 'Raspberry Pi', 'BeagleBone Black']
      },
      {
        name: 'Operating Systems',
        tags: ['Embedded Linux (Yocto)', 'FreeRTOS', 'Bare-metal']
      },
      {
        name: 'Communication Protocols',
        tags: ['CAN/CAN-FD', 'LIN', 'J1939', 'OBD-II', 'MODBUS', 'RS485', 'UART', 'SPI', 'I2C', 'BLE']
      },
      {
        name: 'AI & Computer Vision',
        tags: ['YOLO', 'OpenCV', 'TensorFlow Lite', 'PaddleOCR', 'Tesseract', 'Model Quantization']
      },
      {
        name: 'Tools & DevOps',
        tags: ['Git', 'JIRA', 'Jenkins', 'CANalyzer', 'SavvyCAN', 'Altium', 'CMake']
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
    LinkedIn: <a href="https://www.linkedin.com/in/baseer-piracha/" target="_blank" rel="noopener noreferrer">linkedin.com/in/baseer-piracha</a><br>
    GitHub: <a href="https://github.com/baseerpiracha" target="_blank" rel="noopener noreferrer">github.com/baseerpiracha</a><br>
    Location: Riyadh, Saudi Arabia`
  }
];
