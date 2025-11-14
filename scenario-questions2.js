// Continuing Huawei Cloud Scenario-Based Questions (26-50)

// Add these to the questionBank.scenarioBased array
questionBank.scenarioBased.push(
    {
        id: 26,
        type: 'multiple-choice',
        question: 'An airline company needs to implement a reservation system with high availability and global distribution. Which service combination would be most appropriate?',
        options: [
            'ECS + RDS (Multi-AZ) + ELB + GA + DCS + VPC',
            'BMS + EVS + NAT Gateway',
            'CCE + API Gateway + DCS',
            'DevCloud + SWR + RDS'
        ],
        correct: [0],
        explanation: 'This solution uses ECS for application servers, Multi-AZ RDS for highly available database, ELB for load balancing, GA (Global Accelerator) for global distribution, DCS for session caching, and VPC for network security.'
    },
    {
        id: 27,
        type: 'multiple-choice',
        question: 'A blockchain solution needs to be implemented for supply chain tracking with immutable records. Which service combination would you recommend?',
        options: [
            'ECS + RDS + OBS',
            'BCS + CCE + OBS + API Gateway + IAM',
            'BMS + EVS + NAT Gateway',
            'MRS + DWS + DCS'
        ],
        correct: [1],
        explanation: 'This solution uses BCS (Blockchain Service) for the immutable ledger, CCE for application containers, OBS for document storage, API Gateway for external interactions, and IAM for identity management and access control.'
    },
    {
        id: 28,
        type: 'multiple-choice',
        question: 'A data analytics company needs to implement a solution for real-time streaming analytics of social media data. Which service combination would be most effective?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'DIS + Flink + OBS + GaussDB + QuickBI',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses DIS for streaming data ingestion, Flink for real-time stream processing, OBS for data storage, GaussDB for analytics database, and QuickBI for visualization of the social media analytics.'
    },
    {
        id: 29,
        type: 'multiple-choice',
        question: 'A global enterprise needs to implement a multi-region disaster recovery solution for their critical applications. Which service combination would be most suitable?',
        options: [
            'ECS + RDS + OBS',
            'SDRS + DNS + GaussDB (with active-active) + OBS (Cross-region replication) + CTS',
            'CCE + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [1],
        explanation: 'This solution uses SDRS for cross-region replication, DNS for failover routing, GaussDB with active-active configuration for database consistency, OBS with cross-region replication for data, and CTS for audit trails across regions.'
    },
    {
        id: 30,
        type: 'multiple-choice',
        question: 'A media company needs to implement a content management system with advanced search capabilities. Which service combination would you recommend?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'ECS + ElasticSearch + OBS + RDS + CDN',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses ECS for the CMS application, ElasticSearch for advanced search and indexing, OBS for media storage, RDS for structured content metadata, and CDN for content delivery.'
    },
    {
        id: 31,
        type: 'multiple-choice',
        question: 'A healthcare provider needs to implement a PACS (Picture Archiving and Communication System) for medical images. Which service combination would be most appropriate?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'ECS + OBS + RDS + DEW + DirectConnect + WAF',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses ECS for PACS application servers, OBS for storing medical images, RDS for patient metadata, DEW for encryption to meet healthcare regulations, Direct Connect for secure hospital connectivity, and WAF for protecting web interfaces.'
    },
    {
        id: 32,
        type: 'multiple-choice',
        question: 'A gaming company wants to implement a multiplayer mobile game backend with leaderboards and player profiles. Which service combination would be most suitable?',
        options: [
            'AppGallery Connect + DCS + RDS + CCE + API Gateway',
            'ECS + RDS + OBS',
            'BMS + EVS + NAT Gateway',
            'MRS + DWS + DCS'
        ],
        correct: [0],
        explanation: 'This solution uses AppGallery Connect for mobile services, DCS for leaderboard caching, RDS for player profiles and game state, CCE for game logic microservices, and API Gateway for client-server communication.'
    },
    {
        id: 33,
        type: 'multiple-choice',
        question: 'A company needs to implement data archiving with long-term retention and regulatory compliance. Which service combination would you recommend?',
        options: [
            'ECS + RDS + OBS',
            'OBS (Archive) + CDM + IAM + CTS + KMS',
            'CCE + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [1],
        explanation: 'This solution uses OBS Archive storage class for cost-effective long-term retention, CDM (Cloud Data Migration) for data movement, IAM for access control, CTS for audit trails to demonstrate compliance, and KMS for encryption key management.'
    },
    {
        id: 34,
        type: 'multiple-choice',
        question: 'An e-commerce platform needs to implement a recommendation engine based on customer browsing and purchase history. Which service combination would be most effective?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'MLS + GaussDB + DWS + CCE + API Gateway',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses MLS for machine learning recommendations, GaussDB for transaction data, DWS for analytics queries, CCE for recommendation service containers, and API Gateway for integrating with the e-commerce application.'
    },
    {
        id: 35,
        type: 'multiple-choice',
        question: 'A financial services company needs to implement a solution for algorithmic trading with low latency. Which service combination would be most suitable?',
        options: [
            'ECS (High-performance) + DMS + GaussDB + Anti-DDoS + Direct Connect',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [0],
        explanation: 'This solution uses high-performance ECS for trading algorithms, DMS (Distributed Message Service) for fast message processing, GaussDB for transactional data, Anti-DDoS for protection, and Direct Connect for low-latency connectivity to exchanges.'
    },
    {
        id: 36,
        type: 'multiple-choice',
        question: 'A manufacturing company wants to implement edge computing for their factory IoT devices with local processing and cloud synchronization. Which service combination would you recommend?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'IoT Edge + IoTDA + OBS + DIS + MRS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses IoT Edge for local processing, IoTDA for device connectivity, OBS for data storage, DIS for data streaming, and MRS for big data analysis, creating a complete edge-to-cloud solution for manufacturing.'
    },
    {
        id: 37,
        type: 'multiple-choice',
        question: 'A video surveillance system needs to be implemented with motion detection and video analytics. Which service combination would be most appropriate?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'IVS + ModelArts + OBS + MPC + ECS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses IVS (Intelligent Video Surveillance) for video analytics, ModelArts for AI detection models, OBS for video storage, MPC for video processing, and ECS for the surveillance application.'
    },
    {
        id: 38,
        type: 'multiple-choice',
        question: 'A transportation company needs a fleet management system with real-time vehicle tracking. Which service combination would be most suitable?',
        options: [
            'IoTDA + DIS + GaussDB + MapService + API Gateway',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [0],
        explanation: 'This solution uses IoTDA for connected vehicles, DIS for real-time data streaming, GaussDB for location data storage, MapService for visualization and geospatial functions, and API Gateway for mobile app integration.'
    },
    {
        id: 39,
        type: 'multiple-choice',
        question: 'A telecom company needs to implement network function virtualization (NFV) for their services. Which service combination would you recommend?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'FusionSphere + CCE + SFS + OBS + CNA',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses FusionSphere for NFV infrastructure, CCE for containerized network functions, SFS for shared storage, OBS for object storage, and CNA (Cloud Native Application) platform for orchestration.'
    },
    {
        id: 40,
        type: 'multiple-choice',
        question: 'A research institution wants to implement a high-performance computing environment for genomic analysis. Which service combination would be most effective?',
        options: [
            'ECS (High-performance) + SFS + OBS + ModelArts + BatchCompute',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [0],
        explanation: 'This solution uses high-performance ECS instances for computation, SFS for shared file systems between compute nodes, OBS for storing genomic datasets, ModelArts for ML-based analysis, and BatchCompute for job scheduling and resource optimization.'
    },
    {
        id: 41,
        type: 'multiple-choice',
        question: 'A financial institution needs to implement a compliance archiving system for communications. Which service combination would be most suitable?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'OBS (Archive) + CTS + KMS + IAM + SMN',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses OBS Archive for long-term storage, CTS for comprehensive audit trails, KMS for encryption, IAM for access controls, and SMN for compliance alerts, meeting financial regulatory requirements for communication archiving.'
    },
    {
        id: 42,
        type: 'multiple-choice',
        question: 'A company wants to implement a multi-language contact center with speech recognition and analytics. Which service combination would you recommend?',
        options: [
            'CCaaS + ModelArts (Speech) + DCS + RDS + SMN',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [0],
        explanation: 'This solution uses CCaaS (Contact Center as a Service) for customer interactions, ModelArts with speech recognition capabilities, DCS for session data, RDS for customer records, and SMN for notifications and alerts.'
    },
    {
        id: 43,
        type: 'multiple-choice',
        question: 'An insurance company needs to implement a claims processing system with document analysis and fraud detection. Which service combination would be most appropriate?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'OCR + ModelArts + BPM + OBS + GaussDB',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses OCR for document digitization, ModelArts for fraud detection AI, BPM (Business Process Management) for claims workflow, OBS for document storage, and GaussDB for claims data, creating an end-to-end claims processing system.'
    },
    {
        id: 44,
        type: 'multiple-choice',
        question: 'A retail company wants to implement an inventory management system with barcode/RFID scanning and real-time updates. Which service combination would be most suitable?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'IoTDA + CCE + RDS + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses IoTDA for RFID/scanner connectivity, CCE for microservices, RDS for inventory database, API Gateway for mobile scanner apps, and DCS for real-time data caching.'
    },
    {
        id: 45,
        type: 'multiple-choice',
        question: 'A media production company needs a collaborative environment for video editing and production. Which service combination would you recommend?',
        options: [
            'ECS (GPU) + SFS + OBS + Direct Connect + Workspace',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [0],
        explanation: 'This solution uses GPU-enabled ECS for video processing, SFS for shared project files, OBS for media asset management, Direct Connect for high-speed data transfer, and Workspace for remote collaboration tools.'
    },
    {
        id: 46,
        type: 'multiple-choice',
        question: 'A company wants to implement a data lake solution for consolidated analytics across multiple departments. Which service combination would be most effective?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'OBS + DLI + CDM + LakeFormation + DWS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses OBS as the data lake storage, DLI for SQL queries on the data lake, CDM for data integration from various sources, LakeFormation for data lake governance, and DWS for more complex analytics queries.'
    },
    {
        id: 47,
        type: 'multiple-choice',
        question: 'An agricultural company wants to implement a precision farming solution using IoT sensors and weather data. Which service combination would be most suitable?',
        options: [
            'IoTDA + DIS + MRS + ModelArts + GaussDB + ROMA',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [0],
        explanation: 'This solution uses IoTDA for sensor connectivity, DIS for real-time data streaming, MRS for big data processing, ModelArts for predictive models, GaussDB for structured data storage, and ROMA Connect for integration with external weather services.'
    },
    {
        id: 48,
        type: 'multiple-choice',
        question: 'A travel agency wants to implement a dynamic pricing system based on demand, competition, and seasonal factors. Which service combination would you recommend?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'MLS + DWS + CCE + API Gateway + DCS + SMN',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses MLS for price optimization algorithms, DWS for analytics data, CCE for pricing service containers, API Gateway for external integrations, DCS for real-time pricing cache, and SMN for price change alerts.'
    },
    {
        id: 49,
        type: 'multiple-choice',
        question: 'A construction company needs to implement Building Information Modeling (BIM) with collaborative access. Which service combination would be most appropriate?',
        options: [
            'ECS (GPU) + OBS + SFS + Workspace + VPC Peering',
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [0],
        explanation: 'This solution uses GPU-enabled ECS for 3D rendering, OBS for model storage, SFS for shared access, Workspace for remote collaboration, and VPC Peering for connecting to on-site construction systems.'
    },
    {
        id: 50,
        type: 'multiple-choice',
        question: 'A smart city initiative needs to implement a central platform for IoT devices, data analytics, and citizen services. Which service combination would be most suitable?',
        options: [
            'ECS + RDS + OBS',
            'CCE + API Gateway + DCS',
            'IoTDA + DIS + CCE + MLS + GaussDB + API Gateway + LTS + CES',
            'BMS + EVS + NAT Gateway'
        ],
        correct: [2],
        explanation: 'This solution uses IoTDA for IoT device connectivity, DIS for data streaming, CCE for microservices, MLS for predictive analytics, GaussDB for data storage, API Gateway for service interfaces, LTS for logging, and CES for monitoring, creating a comprehensive smart city platform.'
    }
);
