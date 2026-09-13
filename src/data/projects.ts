import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'vehicle-speed-violation-tracking',
    number: '01',
    title: 'Real-Time Vehicle Speed & Traffic Violation Tracking System',
    subtitle: 'High-Performance Computer Vision & Automated Surveillance Architecture',
    category: 'AI / Computer Vision / Python',
    tagline: 'Automated multi-lane vehicle detection, trajectory estimation, and instantaneous speed violation classification.',
    description: 'An end-to-end intelligent traffic monitoring platform engineered to detect vehicles across multiple camera lanes in real time, accurately compute instantaneous velocity using calibrated perspective geometry, and flag speed violations with automated logging.',
    problem: 'Traditional radar-based traffic monitoring is cost-prohibitive to deploy across all intersections and struggles with multi-vehicle occlusion in congested traffic. Manual surveillance lacks continuous real-time violation enforcement and creates significant latency in incident processing.',
    solution: 'Engineered a modular computer vision pipeline leveraging deep learning object detection paired with multi-object tracking (MOT). The system maps 2D camera coordinates into real-world Euclidean distances using planar homography calibration, calculates speed differentials across bounding box centroids, and triggers automated violation payloads through an asynchronous FastAPI service.',
    technologies: [
      'Python',
      'Computer Vision',
      'Machine Learning',
      'FastAPI',
      'SQL',
      'Deep Learning',
      'REST APIs'
    ],
    architectureSteps: [
      {
        title: 'Video Stream Ingestion & Detection',
        description: 'Ingests high-FPS video streams and processes video frames through deep convolutional object detection models to localize cars, trucks, buses, and motorcycles.',
        tech: 'Python / Neural Networks',
      },
      {
        title: 'Multi-Object Tracking & Association',
        description: 'Maintains persistent vehicle identities across frames despite occlusion and temporary trajectory intersections using spatial Kalman filters and bounding-box association.',
        tech: 'MOT Algorithms / State Estimation',
      },
      {
        title: 'Homography & Velocity Calculation',
        description: 'Applies inverse perspective transformation to map pixel displacements into real-world metric speeds over calibrated frame intervals.',
        tech: 'Planar Geometry / NumPy',
      },
      {
        title: 'Violation Ingestion & Database Logging',
        description: 'Dispatches asynchronous violation events containing vehicle snapshots, speed readings, timestamp, and lane IDs to a structured SQL database through a FastAPI service.',
        tech: 'FastAPI / SQL Engine',
      },
    ],
    keyFeatures: [
      'Real-time multi-vehicle detection and continuous ID tracking',
      'Perspective-corrected speed estimation with dynamic frame-rate compensation',
      'Automated threshold-based violation detection and snapshot recording',
      'High-throughput asynchronous FastAPI backend for violation telemetry',
      'Structured SQL schema for historical query and analytics reporting',
      'Modular architecture ready for edge deployment and cloud ingestion',
    ],
    githubUrl: 'https://github.com/abhinavdewangan/vehicle-speed-violation-tracking',
    liveUrl: '#',
    featured: true,
  },
];
