// Latest Data Model - Updated from your CV
const sections = [
  {
    id: 'about',
    title: 'About Me',
    content: `Senior Embedded & Firmware Engineer with 8+ years of hands-on experience in designing, developing, and deploying high-reliability embedded systems and Edge AI solutions. Expertise spans real-time video analytics, multi-stream object detection/tracking, Edge computing on NVIDIA Jetson platforms, GPU optimization, model quantization, and deployment of computer vision pipelines. Proficient in YOLO model training/fine-tuning, multiple OCR frameworks (PaddleOCR, Tesseract), FastAPI microservices, Docker, Python, PyTorch/TensorFlow, and large-scale vision data pipelines. Strong background in automotive telematics, CAN bus reverse engineering, Embedded Linux (Yocto), real-time firmware, and safety-critical systems (ISO 26262). Proven success in delivering production-ready AI-powered solutions and cross-functional Agile projects in Saudi Arabia.`,
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
        subtitle: 'Sr. R&D Embedded Software Engineer — October 2025 – Present',
        points: [
          'Designed, developed, and optimized real-time Edge AI computer vision solutions on NVIDIA Jetson Orin Nano using YOLO, OpenCV, and multiple OCR frameworks (PaddleOCR, Tesseract) for multi-stream video analytics including VIN detection, number plate recognition, driver behaviour/drowsiness monitoring, people counting, fire & smoke detection, and parking space determination.',
          'Built and deployed FastAPI microservices with Docker for AI model inference, integration, and backend services supporting computer vision pipelines.',
          'Led reverse engineering of CAN bus messages for Toyota, Hyundai, MG, Chevrolet, Ford and other vehicles; developed custom DBC files for telematics integration.',
          'Performed CAN traffic sniffing, signal decoding, and protocol analysis using CANalyzer, SavvyCAN, Vehicle Spy, and custom Python tools.',
          'Developed embedded software and real-time data processing logic using C and Python.',
          'Designed, validated, and integrated embedded communication systems (CAN, CAN-FD, BLE, UART) for automotive IoT applications.',
          'Developed Lua/Galileosky scripts for harsh braking, geofencing, and advanced fleet management logic.',
          'Integrated BLE sensors and Xirgo/Galileosky telematics units with cloud platform.',
          'Led large-scale field deployments and system integration across Saudi Arabia.',
          'Prepared technical documentation, decoding reports, and automated batch image processing pipelines using Pandas and NumPy.'
        ]
      },
      {
        title: 'Innovative Systems',
        url: 'https://www.isys.sa',
        logo: 'isys.png',
        subtitle: 'Sr. Firmware Engineer — August 2023 – September 2025',
        points: [
          'Designed and developed real-time firmware for protection relays on TI MSP430 microcontrollers compliant with international safety standards.',
          'Implemented ANSI 49/50/51/52 protection algorithms, event logging, fault recording (oscillography), and real-time digital control logic.',
          'Developed USB bootloader and remote firmware update application.',
          'Integrated industrial communication protocols (MODBUS RTU/ASCII, RS485).',
          'Performed comprehensive testing and validation on live power systems.',
          'Conducted low-level debugging, performance optimization, and root-cause analysis.',
          'Worked on IEC 61850-compliant systems with strict timing and resource constraints.'
        ]
      },
      {
        title: 'Krämer Automotive Systems GmbH',
        url: 'https://www.kraemer-automotive.com',
        logo: 'kr.png',
        subtitle: 'Sr. Embedded Software Engineer — September 2022 – August 2023',
        points: [
          'Developed firmware for infotainment systems in Bentley and e.Go vehicles on NXP S32K and STM32 microcontrollers.',
          'Implemented robust CAN communication stacks with timeout mechanisms and diagnostics for instrument clusters.',
          'Designed and developed secure boot firmware and USB bootloader for OTA/USB updates.',
          'Optimized drivers and middleware for memory, display, motor control, and HVAC systems.',
          'Worked on Android-based automotive infotainment system integration and customization.',
          'Performed PCB debugging, hardware validation, HIL testing, and ISO 26262 compliance activities (FMEA, safety mechanisms).',
          'Managed project lifecycle using Jira, Confluence, Git, and SVN.'
        ]
      },
      {
        title: 'Crypto Research and Development Center',
        url: '',
        logo: 'crdc.png',
        subtitle: 'Embedded Software Lead — May 2021 – August 2022',
        points: [
          'Led full lifecycle design and development of secure embedded systems and cryptographic modules.',
          'Mentored junior engineers and coordinated cross-functional teams (hardware, firmware, RF, QA).',
          'Implemented cryptographic algorithms (AES-256, SHA-256, HMAC) and secure boot mechanisms.',
          'Conducted reverse engineering of communication protocols using analyzers and SDR tools.',
          'Oversaw compliance with FIPS 140-2, Common Criteria, and MIL-STD-461G standards.',
          'Delivered technical presentations to stakeholders and managed project schedules & deliverables.'
        ]
      },
      {
        title: 'Crypto Research and Development Center',
        url: '',
        logo: 'crdc.png',
        subtitle: 'Embedded Software Engineer — April 2019 – May 2021',
        points: [
          'Designed and implemented secure embedded firmware on AVR, ESP32, STM32, and SAM platforms.',
          'Developed secure audio communication protocols over I2S with cryptographic integration.',
          'Integrated peripherals (SPI, UART, I2C, CAN, RTC, Flash, EEPROM) with low-power techniques.',
          'Designed and debugged multi-layer PCBs using Altium and OrCAD.',
          'Deployed TensorFlow Lite AI models on embedded Linux platforms (Raspberry Pi).',
          'Produced documentation and validation reports for FIPS 140-2 and MIL-STD compliance.'
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
        subtitle: 'National University of Sciences & Technology (NUST), Pakistan — Sep 2017 – Aug 2020',
        url: 'https://nust.edu.pk/',
        logo: 'nust.png',
        points: ['GPA: 3.3/4.0 | First Class Honors']
      },
      {
        title: 'B.Sc. Electrical Engineering',
        subtitle: 'COMSATS University, Pakistan — Feb 2013 – Mar 2017',
        url: 'https://www.comsats.edu.pk/',
        logo: 'comsats.png',
        points: ['GPA: 3.41/4.0 | First Class Honors | Final Year Project: Implementation of OFDM-based Transceiver using USRP in LabVIEW']
      }
    ]
  },
  {
    id: 'skills',
    title: 'Skills',
    type: 'categories',
    categories: [
      {
        name: 'Programming & Frameworks',
        tags: ['Embedded C/C++ (MISRA)', 'Python', 'FastAPI', 'FreeRTOS', 'Bare-metal', 'Yocto Linux']
      },
      {
        name: 'Microcontrollers & Platforms',
        tags: ['ARM Cortex-M', 'STM32', 'NXP S32K', 'TI MSP430', 'AVR', 'ESP32', 'SAM', 'NVIDIA Jetson Orin Nano', 'Raspberry Pi']
      },
      {
        name: 'Communication Protocols',
        tags: ['CAN/CAN-FD', 'J1939', 'OBD-II', 'LIN', 'MODBUS', 'RS485', 'BLE', 'UART', 'SPI', 'I2C', 'I2S', 'MQTT']
      },
      {
        name: 'AI & Computer Vision',
        tags: ['YOLO', 'OpenCV', 'PaddleOCR', 'Tesseract OCR', 'TensorFlow Lite', 'PyTorch', 'CNNs', 'Video Analytics', 'Model Quantization', 'GPU Optimization', 'Pandas', 'NumPy']
      },
      {
        name: 'Safety & Security',
        tags: ['ISO 26262', 'IEC 61850', 'FIPS 140-2', 'MIL-STD-461G', 'Secure Boot', 'Cryptography (AES, SHA, HMAC)']
      },
      {
        name: 'Tools & DevOps',
        tags: ['CANalyzer', 'Git', 'SVN', 'Jenkins', 'GitHub Actions', 'Jira', 'Confluence', 'CMake', 'Altium', 'OpenOCD', 'Label Studio', 'CVAT']
      }
    ]
  },
  {
    id: 'languages',
    title: 'Languages',
    type: 'table',
    table: [
      { language: 'Urdu', listening: 'Native', reading: 'Native', spoken_production: 'Native', spoken_interaction: 'Native', writing: 'Native' },
      { language: 'English', listening: 'C1', reading: 'C1', spoken_production: 'C1', spoken_interaction: 'C1', writing: 'C1' }
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
