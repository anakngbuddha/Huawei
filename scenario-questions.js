// Huawei Cloud Scenario-Based Questions
// Each question presents a real-world scenario and the answers are combinations of Huawei Cloud services/features

// Scenario-based questions for the combination module quiz
questionBank.scenarioBased = [
    {
        id: 1,
        type: 'multiple-choice',
        question: 'A retail company wants to build a highly available e-commerce platform that can automatically scale during sales events. Which combination of services should they use?',
        options: [
            'ECS + RDS + OBS + CDN',
            'ECS + Auto Scaling + ELB + RDS + CDN',
            'BMS + RDS + OBS',
            'CCE + WAF + DCS'
        ],
        correct: [1],
        explanation: 'The ideal combination includes ECS (Elastic Cloud Server) for application hosting, Auto Scaling for handling variable loads, ELB (Elastic Load Balance) for distributing traffic, RDS for database, and CDN for content delivery to ensure fast loading times for static content.'
    },
    {
        id: 2,
        type: 'multiple-choice',
        question: 'A financial institution needs to process and analyze large volumes of transaction data while ensuring data security and compliance. Which service combination would be most appropriate?',
        options: [
            'MRS + OBS + KMS + CBR',
            'ECS + RDS + EIP',
            'CCE + API Gateway + DMS',
            'GaussDB + DevCloud + WAF'
        ],
        correct: [0],
        explanation: 'This solution uses MRS (MapReduce Service) for big data processing, OBS (Object Storage Service) for storing large volumes of data, KMS (Key Management Service) for encryption key management, and CBR (Cloud Backup and Recovery) for data protection and compliance.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        question: 'A gaming company needs to deploy a global multiplayer game with low latency and protection against DDoS attacks. Which combination should they implement?',
        options: [
            'ECS + VPC + NAT Gateway + WAF',
            'BMS + Direct Connect + OBS',
            'ECS + GA + ELB + Anti-DDoS + CCE',
            'RDS + ECS + EVS + IAM'
        ],
        correct: [2],
        explanation: 'This solution uses ECS for game servers, GA (Global Accelerator) for global low-latency connections, ELB for load balancing, Anti-DDoS for protection against attacks, and CCE for container orchestration, allowing the game to scale globally while maintaining performance.'
    },
    {
        id: 4,
        type: 'multiple-choice',
        question: 'A healthcare provider wants to implement a secure telemedicine solution with video consultations and compliant patient data storage. What combination would you recommend?',
        options: [
            'ECS + RDS + OBS + DEW + WAF',
            'CCE + API Gateway + DCS',
            'MRS + GaussDB + VPC',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [0],
        explanation: 'This solution includes ECS for application servers, RDS for structured data, OBS for storing media files, DEW (Data Encryption Workshop) for encryption to meet healthcare compliance requirements, and WAF (Web Application Firewall) to protect against web attacks.'
    },
    {
        id: 5,
        type: 'multiple-choice',
        question: 'A company wants to implement a CI/CD pipeline with automated testing and deployment for their microservices architecture. Which combination of services should they use?',
        options: [
            'ECS + OBS + RDS',
            'DevCloud + SWR + CCE + CodeArts',
            'MRS + DWS + RDS',
            'ELB + AS + VPC + NAT Gateway'
        ],
        correct: [1],
        explanation: 'This combination includes DevCloud for the CI/CD pipeline, SWR (Software Repository for Container) for container image storage, CCE (Cloud Container Engine) for Kubernetes orchestration, and CodeArts for development tools, creating a complete DevOps environment for microservices.'
    },
    {
        id: 6,
        type: 'multiple-choice',
        question: 'An IoT solution requires processing millions of device data points, analyzing them in real-time, and triggering alerts for anomalies. Which service combination would you recommend?',
        options: [
            'IoTDA + DIS + CloudStream + SMN',
            'ECS + RDS + API Gateway',
            'CCE + OBS + ELB',
            'DCS + MRS + WAF'
        ],
        correct: [0],
        explanation: 'This solution uses IoTDA (IoT Device Access) for device connectivity, DIS (Data Ingestion Service) for collecting data streams, CloudStream for real-time analytics, and SMN (Simple Message Notification) for alerts, creating a complete IoT data processing pipeline.'
    },
    {
        id: 7,
        type: 'multiple-choice',
        question: 'A media company needs to implement a video streaming platform with content transcoding, storage, and global delivery capabilities. Which combination would be most suitable?',
        options: [
            'ECS + RDS + VPC',
            'MPC + OBS + CDN + VOD',
            'CCE + API Gateway + RDS',
            'DCS + MRS + ELB'
        ],
        correct: [1],
        explanation: 'This solution uses MPC (Media Processing Center) for transcoding videos into different formats, OBS for storing video files, CDN for global content delivery with low latency, and VOD (Video on Demand) for streaming management, creating a complete video streaming service.'
    },
    {
        id: 8,
        type: 'multiple-choice',
        question: 'A bank needs to implement a disaster recovery solution for their critical applications with minimal data loss and quick recovery time. What combination would you recommend?',
        options: [
            'SDRS + CBR + OBS + ECS (Multi-AZ)',
            'ELB + Auto Scaling + RDS',
            'CCE + DevCloud + SWR',
            'DCS + MRS + API Gateway'
        ],
        correct: [0],
        explanation: 'This solution uses SDRS (Storage Disaster Recovery Service) for replication between sites, CBR for backup and recovery, OBS for object storage backups, and multi-AZ ECS deployments for high availability, providing comprehensive disaster recovery capabilities.'
    },
    {
        id: 9,
        type: 'multiple-choice',
        question: 'A research institution wants to build a high-performance computing cluster for scientific simulations. Which service combination would be most appropriate?',
        options: [
            'CCE + OBS + API Gateway',
            'HPC + ECS (GPU/FPGA) + OBS + AS',
            'DevCloud + RDS + WAF',
            'DWS + MRS + DCS'
        ],
        correct: [1],
        explanation: 'This solution uses HPC (High-Performance Computing) service for cluster management, GPU/FPGA-accelerated ECS instances for computational power, OBS for storing large datasets, and AS (Auto Scaling) to adjust compute resources based on workloads.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        question: 'An e-commerce company needs to implement personalized product recommendations based on customer behavior data. Which combination would be most effective?',
        options: [
            'ECS + RDS + OBS',
            'MLS + DWS + OBS + DIS',
            'CCE + API Gateway + DCS',
            'DevCloud + SWR + RDS'
        ],
        correct: [1],
        explanation: 'This solution uses MLS (Machine Learning Service) for recommendation algorithms, DWS (Data Warehouse Service) for analytical queries, OBS for data lake storage, and DIS for streaming data ingestion, creating a complete personalization platform.'
    },
    {
        id: 11,
        type: 'multiple-choice',
        question: 'A global enterprise wants to establish a hybrid cloud architecture connecting their on-premises data center with Huawei Cloud. Which combination of services should they use?',
        options: [
            'ECS + RDS + OBS',
            'Direct Connect + VPC + VPN + Cloud Connect',
            'CCE + API Gateway + DCS',
            'MRS + DWS + SMN'
        ],
        correct: [1],
        explanation: 'This solution uses Direct Connect for dedicated connectivity, VPC for network isolation, VPN for encrypted communication, and Cloud Connect for connecting multiple cloud environments, creating a comprehensive hybrid cloud architecture.'
    },
    {
        id: 12,
        type: 'multiple-choice',
        question: 'A startup wants to build a serverless web application with minimal infrastructure management. Which service combination would you recommend?',
        options: [
            'FunctionGraph + API Gateway + OBS + DynamoDB + AppHub',
            'ECS + RDS + VPC + ELB',
            'CCE + SWR + RDS + ELB',
            'BMS + EVS + EIP + Direct Connect'
        ],
        correct: [0],
        explanation: 'This solution uses FunctionGraph for serverless compute, API Gateway for managing APIs, OBS for static content, DynamoDB for NoSQL database needs, and AppHub for application orchestration, creating a complete serverless architecture.'
    },
    {
        id: 13,
        type: 'multiple-choice',
        question: 'A security-conscious organization needs to implement comprehensive security controls for their cloud workloads. Which combination would provide the most robust security posture?',
        options: [
            'ECS + RDS + OBS',
            'HSS + WAF + CBH + IAM + DEW',
            'CCE + API Gateway + DCS',
            'MRS + DWS + SMN'
        ],
        correct: [1],
        explanation: 'This solution uses HSS (Host Security Service) for server protection, WAF for web application security, CBH (Cloud Bastion Host) for secure access, IAM for identity management, and DEW for encryption, creating a defense-in-depth security architecture.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        question: 'A telecommunications company needs to analyze call detail records in real-time to detect fraudulent activities. Which service combination would be most appropriate?',
        options: [
            'MRS + DWS + MLS + DLI + CloudTable',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'DevCloud + SWR + RDS'
        ],
        correct: [0],
        explanation: 'This solution uses MRS for big data processing, DWS for data warehousing, MLS for machine learning fraud detection models, DLI (Data Lake Insight) for SQL queries on the data lake, and CloudTable for NoSQL storage of high-volume records.'
    },
    {
        id: 15,
        type: 'multiple-choice',
        question: 'A retail company needs to implement a chatbot with natural language processing to assist customers with product inquiries. Which service combination would you recommend?',
        options: [
            'ECS + RDS + OBS',
            'ModelArts + API Gateway + DCS + RDS',
            'CCE + WAF + DMS',
            'DevCloud + SWR + OBS'
        ],
        correct: [1],
        explanation: 'This solution uses ModelArts for AI model training and NLP capabilities, API Gateway for exposing the chatbot API, DCS for caching, and RDS for storing conversation data and product information.'
    },
    {
        id: 16,
        type: 'multiple-choice',
        question: 'An organization wants to set up a virtual desktop infrastructure (VDI) for remote employees with secure access. Which service combination would be most suitable?',
        options: [
            'Workspace + IAM + VPC + HSS + ECS',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'DevCloud + SWR + RDS'
        ],
        correct: [0],
        explanation: 'This solution uses Workspace for virtual desktop services, IAM for identity and access management, VPC for network isolation, HSS for security, and ECS for compute resources, providing a complete and secure VDI environment.'
    },
    {
        id: 17,
        type: 'multiple-choice',
        question: 'A healthcare organization needs to implement a HIPAA-compliant environment for storing and processing patient data. Which service combination would meet these requirements?',
        options: [
            'ECS + RDS + OBS',
            'ECS (Dedicated Host) + GaussDB + OBS + DEW + HSS + CBR',
            'CCE + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [1],
        explanation: 'This solution uses Dedicated Host ECS for physical isolation, GaussDB for secure database, OBS with versioning for data storage, DEW for encryption, HSS for security monitoring, and CBR for compliant backup solutions - all essential for HIPAA compliance.'
    },
    {
        id: 18,
        type: 'multiple-choice',
        question: 'A content delivery network needs to be implemented for a global website with static and dynamic content, image optimization, and DDoS protection. Which service combination would you recommend?',
        options: [
            'CDN + OBS + WAF + Anti-DDoS + Image Processing Service',
            'ECS + RDS + VPC',
            'CCE + API Gateway + DCS',
            'DevCloud + SWR + RDS'
        ],
        correct: [0],
        explanation: 'This solution uses CDN for global content delivery, OBS for storing static content, WAF and Anti-DDoS for protection, and Image Processing Service to optimize images for different devices, creating a complete content delivery solution.'
    },
    {
        id: 19,
        type: 'multiple-choice',
        question: 'An organization wants to implement a centralized logging and monitoring solution for their multi-cloud environment. Which service combination would be most appropriate?',
        options: [
            'ECS + RDS + OBS',
            'LTS + CES + AOM + APM + CCE',
            'CCE + API Gateway + DCS',
            'DevCloud + SWR + RDS'
        ],
        correct: [1],
        explanation: 'This solution uses LTS (Log Tank Service) for log collection, CES (Cloud Eye Service) for monitoring metrics, AOM (Application Operations Management) for application insights, APM for performance monitoring, and CCE for deploying monitoring agents.'
    },
    {
        id: 20,
        type: 'multiple-choice',
        question: 'A financial services company needs to implement a real-time fraud detection system for credit card transactions. Which service combination would be most suitable?',
        options: [
            'ECS + RDS + OBS',
            'DIS + Flink + ModelArts + GaussDB + SMN',
            'CCE + API Gateway + DCS',
            'MRS + DWS + RDS'
        ],
        correct: [1],
        explanation: 'This solution uses DIS for ingesting transaction streams, Flink for real-time stream processing, ModelArts for ML-based fraud detection, GaussDB for high-performance storage, and SMN for real-time alerts on detected fraud.'
    },
    {
        id: 21,
        type: 'multiple-choice',
        question: 'A government agency needs to implement a secure document management system with strict access controls and audit trails. Which service combination would you recommend?',
        options: [
            'OBS + IAM + CTS + DEW + CBH',
            'ECS + RDS + CDN',
            'CCE + API Gateway + DCS',
            'DevCloud + SWR + RDS'
        ],
        correct: [0],
        explanation: 'This solution uses OBS for document storage, IAM for fine-grained access control, CTS (Cloud Trace Service) for comprehensive audit trails, DEW for encryption, and CBH for secure administrative access, meeting stringent government security requirements.'
    },
    {
        id: 22,
        type: 'multiple-choice',
        question: 'A SaaS provider wants to implement multi-tenancy in their application with isolated storage and compute for each customer. Which service combination would best support this architecture?',
        options: [
            'ECS + RDS + OBS',
            'CCE + RDS (with schema isolation) + IAM + VPC + HVD',
            'BMS + EVS + NAT Gateway',
            'MRS + DWS + DCS'
        ],
        correct: [1],
        explanation: 'This solution uses CCE for containerized applications, RDS with schema isolation for tenant data separation, IAM for tenant access management, VPC for network isolation, and HVD (Hierarchical Virtual Data) for multi-tenant data segregation.'
    },
    {
        id: 23,
        type: 'multiple-choice',
        question: 'A manufacturing company wants to implement an IoT solution to monitor equipment health and predict maintenance needs. Which service combination would be most effective?',
        options: [
            'IoTDA + DIS + MRS + ModelArts + GaussDB + CCE',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'DevCloud + SWR + RDS'
        ],
        correct: [0],
        explanation: 'This solution uses IoTDA for device connectivity, DIS for data streaming, MRS for data processing, ModelArts for predictive maintenance algorithms, GaussDB for storing equipment data, and CCE for hosting monitoring applications.'
    },
    {
        id: 24,
        type: 'multiple-choice',
        question: 'A digital marketing agency needs to implement a data analytics platform for campaign performance analysis. Which service combination would you recommend?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'DLI + OBS + DWS + MLS + QuickBI',
            'DevCloud + SWR + RDS'
        ],
        correct: [2],
        explanation: 'This solution uses DLI for interactive queries, OBS for a data lake, DWS for data warehousing, MLS for predictive analytics, and QuickBI for visualization dashboards, creating a complete marketing analytics platform.'
    },
    {
        id: 25,
        type: 'multiple-choice',
        question: 'A mobile app developer needs to implement a backend with push notifications, user authentication, and data synchronization. Which service combination would be most suitable?',
        options: [
            'AppGallery Connect + IAM + RDS + OBS + API Gateway',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'DevCloud + SWR + RDS'
        ],
        correct: [0],
        explanation: 'This solution uses AppGallery Connect for mobile app services including push notifications, IAM for user authentication, RDS for structured data, OBS for media storage, and API Gateway for exposing backend APIs to the mobile app.'
    }
];
