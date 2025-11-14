// Huawei Cloud Quiz - Question Bank
// Note: This is a comprehensive question bank based on typical Huawei Cloud certification content
// You should review and adjust questions based on your actual PDF materials

// Module 1: Diving into Huawei Cloud (30 questions)
questionBank.module1 = [
    {
        id: 1,
        type: 'multiple-choice',
        question: 'What does Huawei Cloud provide as its primary service model?',
        options: [
            'Infrastructure as a Service (IaaS) only',
            'Platform as a Service (PaaS) only',
            'IaaS, PaaS, and SaaS',
            'Software as a Service (SaaS) only'
        ],
        correct: [2],
        explanation: 'Huawei Cloud provides a comprehensive cloud service offering including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) to meet diverse business needs.'
    },
    {
        id: 2,
        type: 'true-false',
        question: 'Huawei Cloud operates data centers only in China.',
        options: ['True', 'False'],
        correct: [1],
        explanation: 'False. Huawei Cloud operates data centers globally across multiple regions including Asia Pacific, Europe, Latin America, and Africa, providing services to customers worldwide.'
    },
    {
        id: 3,
        type: 'multiple-choice',
        question: 'Which of the following is NOT a core advantage of Huawei Cloud?',
        options: [
            'Global coverage',
            'AI-driven innovation',
            'Limited scalability',
            'Security and compliance'
        ],
        correct: [2],
        explanation: 'Limited scalability is NOT an advantage. Huawei Cloud offers elastic scalability as one of its core benefits, along with global coverage, AI capabilities, and strong security measures.'
    },
    {
        id: 4,
        type: 'multiple-answer',
        question: 'Which of the following are key characteristics of cloud computing? (Select all that apply)',
        options: [
            'On-demand self-service',
            'Broad network access',
            'Resource pooling',
            'Fixed pricing only'
        ],
        correct: [0, 1, 2],
        explanation: 'On-demand self-service, broad network access, and resource pooling are key characteristics of cloud computing. Cloud computing offers flexible pricing models, not just fixed pricing.'
    },
    {
        id: 5,
        type: 'true-false',
        question: 'Huawei Cloud provides support for hybrid cloud deployments.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Huawei Cloud supports hybrid cloud architectures, allowing enterprises to integrate on-premises infrastructure with cloud services for flexibility and gradual cloud adoption.'
    },
    {
        id: 6,
        type: 'multiple-choice',
        question: 'What is the primary purpose of Huawei Cloud regions?',
        options: [
            'To increase costs',
            'To provide geographical redundancy and low latency',
            'To limit service availability',
            'To reduce security'
        ],
        correct: [1],
        explanation: 'Regions provide geographical redundancy, disaster recovery capabilities, and low latency access for users in different geographical locations, improving service reliability and performance.'
    },
    {
        id: 7,
        type: 'multiple-choice',
        question: 'Which service model allows customers to deploy applications without managing underlying infrastructure?',
        options: [
            'IaaS',
            'PaaS',
            'SaaS',
            'DaaS'
        ],
        correct: [1],
        explanation: 'Platform as a Service (PaaS) allows customers to deploy and manage applications without worrying about the underlying infrastructure, middleware, or operating systems.'
    },
    {
        id: 8,
        type: 'multiple-answer',
        question: 'Which of the following are benefits of using Huawei Cloud? (Select all that apply)',
        options: [
            'Reduced capital expenditure',
            'Automatic scaling',
            'Global reach',
            'Requires physical data center management'
        ],
        correct: [0, 1, 2],
        explanation: 'Cloud computing reduces capital expenditure, provides automatic scaling, and offers global reach. One of the main benefits is eliminating the need for physical data center management.'
    },
    {
        id: 9,
        type: 'true-false',
        question: 'Availability Zones within a region are isolated from each other to improve fault tolerance.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Availability Zones (AZs) within a region are physically isolated data centers with independent power, cooling, and networking, providing fault tolerance and high availability.'
    },
    {
        id: 10,
        type: 'multiple-choice',
        question: 'What does TCO stand for in cloud computing context?',
        options: [
            'Total Cloud Operations',
            'Total Cost of Ownership',
            'Technical Cloud Optimization',
            'Transfer Control Operation'
        ],
        correct: [1],
        explanation: 'TCO stands for Total Cost of Ownership, which represents the complete cost of owning and operating IT infrastructure, including hardware, software, maintenance, and operational costs.'
    },
    {
        id: 11,
        type: 'multiple-choice',
        question: 'Which Huawei Cloud feature ensures data sovereignty and compliance?',
        options: [
            'Global data replication only',
            'Regional data centers with local compliance',
            'Centralized data storage',
            'No compliance measures'
        ],
        correct: [1],
        explanation: 'Huawei Cloud operates regional data centers that comply with local laws and regulations, ensuring data sovereignty and meeting regional compliance requirements.'
    },
    {
        id: 12,
        type: 'true-false',
        question: 'Huawei Cloud Console is a web-based interface for managing cloud resources.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Huawei Cloud Console is a web-based management interface that allows users to create, configure, monitor, and manage cloud resources through a graphical user interface.'
    },
    {
        id: 13,
        type: 'multiple-answer',
        question: 'Which of the following are deployment models in cloud computing? (Select all that apply)',
        options: [
            'Public cloud',
            'Private cloud',
            'Hybrid cloud',
            'Isolated cloud'
        ],
        correct: [0, 1, 2],
        explanation: 'The main cloud deployment models are public cloud, private cloud, and hybrid cloud. Isolated cloud is not a standard deployment model.'
    },
    {
        id: 14,
        type: 'multiple-choice',
        question: 'What is the primary function of IAM (Identity and Access Management) in Huawei Cloud?',
        options: [
            'Data storage',
            'User authentication and authorization',
            'Network routing',
            'Content delivery'
        ],
        correct: [1],
        explanation: 'IAM is used for user authentication and authorization, managing user identities, permissions, and access control to cloud resources and services.'
    },
    {
        id: 15,
        type: 'true-false',
        question: 'Huawei Cloud offers pay-as-you-go pricing models.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Huawei Cloud offers flexible pricing models including pay-as-you-go (on-demand), allowing customers to pay only for the resources they consume without upfront commitments.'
    },
    {
        id: 16,
        type: 'multiple-choice',
        question: 'Which tool is used for programmatic access to Huawei Cloud services?',
        options: [
            'Web Console only',
            'APIs and SDKs',
            'Physical terminal',
            'Email requests'
        ],
        correct: [1],
        explanation: 'Huawei Cloud provides APIs (Application Programming Interfaces) and SDKs (Software Development Kits) for programmatic access and automation of cloud services.'
    },
    {
        id: 17,
        type: 'multiple-answer',
        question: 'Which of the following are included in Huawei Cloud\'s shared responsibility model? (Select all that apply)',
        options: [
            'Huawei manages physical infrastructure',
            'Customer manages data security',
            'Huawei manages customer applications',
            'Customer manages access controls'
        ],
        correct: [0, 1, 3],
        explanation: 'In the shared responsibility model, Huawei manages physical infrastructure while customers are responsible for their data security and access controls. Customers manage their own applications.'
    },
    {
        id: 18,
        type: 'true-false',
        question: 'Cloud migration can be performed all at once without any planning.',
        options: ['True', 'False'],
        correct: [1],
        explanation: 'False. Cloud migration requires careful planning, assessment, strategy development, and often follows a phased approach to minimize risks and ensure business continuity.'
    },
    {
        id: 19,
        type: 'multiple-choice',
        question: 'What is the main benefit of using cloud services compared to traditional on-premises infrastructure?',
        options: [
            'Higher upfront costs',
            'Limited scalability',
            'Elasticity and flexibility',
            'Manual resource provisioning'
        ],
        correct: [2],
        explanation: 'Cloud services provide elasticity and flexibility, allowing resources to scale up or down based on demand, reducing costs and improving efficiency compared to fixed on-premises infrastructure.'
    },
    {
        id: 20,
        type: 'multiple-choice',
        question: 'Which Huawei Cloud service provides monitoring and operations management?',
        options: [
            'OBS',
            'ECS',
            'Cloud Eye',
            'VPC'
        ],
        correct: [2],
        explanation: 'Cloud Eye (CES) is Huawei Cloud\'s monitoring service that provides real-time monitoring, alarms, and operations management for cloud resources and applications.'
    },
    {
        id: 21,
        type: 'true-false',
        question: 'Multi-tenancy in cloud computing means multiple customers share the same physical infrastructure.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Multi-tenancy is a key characteristic of cloud computing where multiple customers (tenants) share the same physical infrastructure while maintaining logical isolation and security.'
    },
    {
        id: 22,
        type: 'multiple-answer',
        question: 'Which factors should be considered when selecting a cloud region? (Select all that apply)',
        options: [
            'Latency to end users',
            'Compliance and data sovereignty',
            'Service availability',
            'Color of the data center'
        ],
        correct: [0, 1, 2],
        explanation: 'When selecting a region, consider latency, compliance requirements, and service availability. Physical characteristics like building color are not relevant factors.'
    },
    {
        id: 23,
        type: 'multiple-choice',
        question: 'What does SLA stand for in cloud services?',
        options: [
            'Service Level Agreement',
            'System Load Analyzer',
            'Storage Level Access',
            'Security Layer Authentication'
        ],
        correct: [0],
        explanation: 'SLA stands for Service Level Agreement, which defines the expected service availability, performance levels, and responsibilities between the cloud provider and customer.'
    },
    {
        id: 24,
        type: 'true-false',
        question: 'Huawei Cloud provides 24/7 technical support for enterprise customers.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Huawei Cloud offers 24/7 technical support for enterprise customers with various support tiers to ensure business continuity and quick issue resolution.'
    },
    {
        id: 25,
        type: 'multiple-choice',
        question: 'Which concept describes the ability to access cloud services from various devices and locations?',
        options: [
            'Resource pooling',
            'Measured service',
            'Broad network access',
            'Rapid elasticity'
        ],
        correct: [2],
        explanation: 'Broad network access means cloud services are available over the network and accessed through standard mechanisms from various platforms like mobile phones, tablets, and workstations.'
    },
    {
        id: 26,
        type: 'multiple-answer',
        question: 'Which of the following are common cloud migration strategies? (Select all that apply)',
        options: [
            'Rehost (Lift and Shift)',
            'Refactor/Re-architect',
            'Retain everything on-premises',
            'Retire obsolete systems'
        ],
        correct: [0, 1, 3],
        explanation: 'Common migration strategies include rehosting (lift and shift), refactoring, and retiring old systems. Retaining everything on-premises is not a cloud migration strategy.'
    },
    {
        id: 27,
        type: 'true-false',
        question: 'Cloud computing eliminates all IT operational overhead.',
        options: ['True', 'False'],
        correct: [1],
        explanation: 'False. While cloud computing reduces operational overhead significantly, customers still need to manage their applications, data, user access, and security configurations.'
    },
    {
        id: 28,
        type: 'multiple-choice',
        question: 'What is the primary purpose of cloud resource tagging?',
        options: [
            'To increase performance',
            'To organize and manage resources',
            'To encrypt data',
            'To create backups'
        ],
        correct: [1],
        explanation: 'Resource tagging helps organize, manage, and track cloud resources, enabling better cost allocation, access control, and operational management.'
    },
    {
        id: 29,
        type: 'multiple-choice',
        question: 'Which principle ensures that users have only the minimum access rights necessary?',
        options: [
            'Principle of abundance',
            'Principle of least privilege',
            'Principle of maximum access',
            'Principle of open access'
        ],
        correct: [1],
        explanation: 'The principle of least privilege (PoLP) is a security concept where users are given the minimum levels of access necessary to perform their job functions, reducing security risks.'
    },
    {
        id: 30,
        type: 'true-false',
        question: 'Huawei Cloud supports API-based automation for infrastructure deployment.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Huawei Cloud provides comprehensive APIs that support Infrastructure as Code (IaC) and automation, enabling programmatic deployment and management of cloud resources.'
    }
];

// Module 2: Compute Services (30 questions)
questionBank.module2 = [
    {
        id: 31,
        type: 'multiple-choice',
        question: 'What does ECS stand for in Huawei Cloud?',
        options: [
            'Enhanced Cloud System',
            'Elastic Compute Service',
            'Enterprise Computing Solution',
            'Extended Cloud Storage'
        ],
        correct: [1],
        explanation: 'ECS stands for Elastic Compute Service, which provides scalable computing resources with various instance types to meet different workload requirements.'
    },
    {
        id: 32,
        type: 'multiple-answer',
        question: 'Which of the following are ECS instance purchasing options? (Select all that apply)',
        options: [
            'On-Demand',
            'Spot Instance',
            'Dedicated Host',
            'Free Forever'
        ],
        correct: [0, 1, 2],
        explanation: 'Huawei Cloud ECS offers On-Demand, Spot Instance, and Dedicated Host purchasing options. There is no "Free Forever" option, though free trials may be available.'
    },
    {
        id: 33,
        type: 'true-false',
        question: 'ECS instances can be resized (scaled up/down) after creation.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. ECS instances support vertical scaling, allowing you to change the instance specifications (CPU, memory) after creation to meet changing workload demands.'
    },
    {
        id: 34,
        type: 'multiple-choice',
        question: 'Which ECS feature allows you to save the state of an instance and restore it later?',
        options: [
            'Auto Scaling',
            'Image',
            'Security Group',
            'Load Balancer'
        ],
        correct: [1],
        explanation: 'Creating an image (snapshot) of an ECS instance captures its complete state, including OS, applications, and data, allowing you to create new instances or restore the original.'
    },
    {
        id: 35,
        type: 'multiple-choice',
        question: 'What is the primary function of Auto Scaling (AS) in Huawei Cloud?',
        options: [
            'Manual resource allocation',
            'Automatic adjustment of compute resources based on demand',
            'Data backup',
            'Network routing'
        ],
        correct: [1],
        explanation: 'Auto Scaling automatically adjusts the number of ECS instances based on configured policies and real-time demand, ensuring optimal resource utilization and cost efficiency.'
    },
    {
        id: 36,
        type: 'true-false',
        question: 'Dedicated Hosts provide physical servers for exclusive use by a single tenant.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Dedicated Hosts are physical servers dedicated to a single tenant, providing enhanced isolation, compliance, and the ability to use existing licenses (BYOL - Bring Your Own License).'
    },
    {
        id: 37,
        type: 'multiple-answer',
        question: 'Which components are required to launch an ECS instance? (Select all that apply)',
        options: [
            'Image',
            'Instance type',
            'VPC and subnet',
            'Domain name'
        ],
        correct: [0, 1, 2],
        explanation: 'To launch an ECS instance, you need an image (OS), instance type (specifications), and network configuration (VPC/subnet). A domain name is optional and not required for launch.'
    },
    {
        id: 38,
        type: 'multiple-choice',
        question: 'Which service provides pre-configured images with operating systems and applications?',
        options: [
            'ECS only',
            'Image Management Service (IMS)',
            'Auto Scaling',
            'Cloud Eye'
        ],
        correct: [1],
        explanation: 'Image Management Service (IMS) provides management of both public and private images, including pre-configured images with various operating systems and application stacks.'
    },
    {
        id: 39,
        type: 'true-false',
        question: 'ECS instances automatically back up data without any configuration.',
        options: ['True', 'False'],
        correct: [1],
        explanation: 'False. Automatic backups must be configured using services like Cloud Backup and Recovery (CBR) or by creating manual snapshots of volumes attached to ECS instances.'
    },
    {
        id: 40,
        type: 'multiple-choice',
        question: 'What is the maximum number of ECS instances that can be created in an AS group by default?',
        options: [
            '10',
            '100',
            'Depends on quota',
            'Unlimited'
        ],
        correct: [2],
        explanation: 'The maximum number of instances in an Auto Scaling group depends on your account quota, which can be increased by submitting a service ticket to Huawei Cloud.'
    },
    {
        id: 41,
        type: 'multiple-answer',
        question: 'Which metrics can trigger Auto Scaling policies? (Select all that apply)',
        options: [
            'CPU utilization',
            'Memory usage',
            'Network traffic',
            'Instance color'
        ],
        correct: [0, 1, 2],
        explanation: 'Auto Scaling can be triggered by metrics like CPU utilization, memory usage, and network traffic monitored by Cloud Eye. Instance color is not a valid metric.'
    },
    {
        id: 42,
        type: 'true-false',
        question: 'Spot Instances offer significant cost savings but can be reclaimed by Huawei Cloud.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Spot Instances provide discounted pricing (up to 90% off) but can be reclaimed when demand for resources increases, making them suitable for fault-tolerant workloads.'
    },
    {
        id: 43,
        type: 'multiple-choice',
        question: 'Which instance type is optimized for memory-intensive applications?',
        options: [
            'General Purpose',
            'Compute Optimized',
            'Memory Optimized',
            'GPU-accelerated'
        ],
        correct: [2],
        explanation: 'Memory Optimized instances provide high memory-to-CPU ratios, ideal for memory-intensive applications like in-memory databases, big data processing, and caching.'
    },
    {
        id: 44,
        type: 'multiple-choice',
        question: 'What is the purpose of user data in ECS instances?',
        options: [
            'To encrypt data',
            'To run scripts during instance initialization',
            'To store backup data',
            'To configure network settings only'
        ],
        correct: [1],
        explanation: 'User data allows you to pass scripts or configuration data to an instance during launch, enabling automated configuration and application deployment.'
    },
    {
        id: 45,
        type: 'true-false',
        question: 'ECS instances in different Availability Zones cannot communicate with each other.',
        options: ['True', 'False'],
        correct: [1],
        explanation: 'False. ECS instances in different AZs within the same region can communicate through the VPC network, providing both fault tolerance and connectivity.'
    },
    {
        id: 46,
        type: 'multiple-answer',
        question: 'Which of the following are valid ECS instance states? (Select all that apply)',
        options: [
            'Running',
            'Stopped',
            'Deleted',
            'Hibernated'
        ],
        correct: [0, 1, 2],
        explanation: 'Valid ECS instance states include Running, Stopped, and Deleted. Hibernation is not a standard state in Huawei Cloud ECS.'
    },
    {
        id: 47,
        type: 'multiple-choice',
        question: 'Which service should be used for batch computing workloads?',
        options: [
            'Regular ECS instances only',
            'ECS with Auto Scaling',
            'GPU instances only',
            'Load Balancer'
        ],
        correct: [1],
        explanation: 'ECS with Auto Scaling is ideal for batch computing as it can automatically scale resources based on workload, process tasks in parallel, and reduce costs during idle periods.'
    },
    {
        id: 48,
        type: 'true-false',
        question: 'Cloud-init is used for instance initialization and configuration.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Cloud-init is an industry-standard tool used for instance initialization, allowing automated configuration of instances during boot time.'
    },
    {
        id: 49,
        type: 'multiple-choice',
        question: 'What happens to data on local disks when an ECS instance is stopped?',
        options: [
            'Data is always preserved',
            'Data may be lost (local disks are ephemeral)',
            'Data is automatically backed up',
            'Data is moved to EVS'
        ],
        correct: [1],
        explanation: 'Local disks are ephemeral storage that may lose data when an instance is stopped or terminated. For persistent storage, use EVS (Elastic Volume Service) disks.'
    },
    {
        id: 50,
        type: 'multiple-answer',
        question: 'Which factors affect ECS instance pricing? (Select all that apply)',
        options: [
            'Instance type and specifications',
            'Region',
            'Billing mode',
            'Instance name'
        ],
        correct: [0, 1, 2],
        explanation: 'ECS pricing is affected by instance specifications, region, and billing mode (on-demand vs. subscription). The instance name does not affect pricing.'
    },
    {
        id: 51,
        type: 'true-false',
        question: 'GPU-accelerated instances are suitable for machine learning and AI workloads.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. GPU-accelerated instances provide powerful parallel processing capabilities ideal for machine learning, deep learning, AI training/inference, and scientific computing.'
    },
    {
        id: 52,
        type: 'multiple-choice',
        question: 'Which service allows you to run containers without managing underlying servers?',
        options: [
            'ECS',
            'Cloud Container Engine (CCE)',
            'Bare Metal Server (BMS)',
            'Dedicated Host'
        ],
        correct: [1],
        explanation: 'Cloud Container Engine (CCE) is a managed Kubernetes service that allows you to run containerized applications without managing the underlying infrastructure.'
    },
    {
        id: 53,
        type: 'multiple-choice',
        question: 'What is the primary benefit of using instance metadata?',
        options: [
            'Increase storage capacity',
            'Access instance information from within the instance',
            'Improve network performance',
            'Reduce costs'
        ],
        correct: [1],
        explanation: 'Instance metadata provides a way to access information about an instance (like instance ID, IP address, region) from within the instance itself, useful for automation and configuration.'
    },
    {
        id: 54,
        type: 'true-false',
        question: 'Bare Metal Servers (BMS) provide physical servers with cloud-like provisioning.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. BMS provides dedicated physical servers with the convenience of cloud provisioning, offering high performance without virtualization overhead.'
    },
    {
        id: 55,
        type: 'multiple-answer',
        question: 'Which scenarios are suitable for using Spot Instances? (Select all that apply)',
        options: [
            'Batch processing jobs',
            'Stateless web applications',
            'Critical production databases',
            'Data analysis tasks'
        ],
        correct: [0, 1, 3],
        explanation: 'Spot Instances are suitable for fault-tolerant workloads like batch processing, stateless applications, and data analysis. They are NOT recommended for critical databases due to potential interruption.'
    },
    {
        id: 56,
        type: 'multiple-choice',
        question: 'Which ECS feature allows you to copy an instance configuration to create new instances?',
        options: [
            'Security Group',
            'Custom Image',
            'Load Balancer',
            'Auto Scaling'
        ],
        correct: [1],
        explanation: 'Creating a custom image from an existing instance captures its configuration, allowing you to quickly launch multiple identical instances.'
    },
    {
        id: 57,
        type: 'true-false',
        question: 'Instance specifications cannot be changed after creation.',
        options: ['True', 'False'],
        correct: [1],
        explanation: 'False. ECS instances support specification changes (flavor modification) to scale CPU, memory, and other resources up or down based on workload requirements.'
    },
    {
        id: 58,
        type: 'multiple-choice',
        question: 'What is the cooldown period in Auto Scaling?',
        options: [
            'Time to shut down instances',
            'Waiting time before another scaling activity',
            'Instance boot time',
            'Backup interval'
        ],
        correct: [1],
        explanation: 'The cooldown period is the time to wait after a scaling activity before another scaling action can occur, preventing excessive scaling and allowing metrics to stabilize.'
    },
    {
        id: 59,
        type: 'multiple-answer',
        question: 'Which operations can be performed on a stopped ECS instance? (Select all that apply)',
        options: [
            'Modify specifications',
            'Create image',
            'Attach/detach volumes',
            'Access running applications'
        ],
        correct: [0, 1, 2],
        explanation: 'When stopped, you can modify specifications, create images, and manage volumes. You cannot access running applications since the instance is not running.'
    },
    {
        id: 60,
        type: 'true-false',
        question: 'High-performance instances are optimized for compute-intensive workloads.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Compute-optimized (high-performance) instances provide high CPU performance, ideal for compute-intensive applications like scientific computing, batch processing, and gaming servers.'
    }
];

// Module 3: Storage Services (30 questions)
questionBank.module3 = [
    {
        id: 61,
        type: 'multiple-choice',
        question: 'What does OBS stand for in Huawei Cloud?',
        options: [
            'Object Backup Service',
            'Object-Based Storage',
            'Object Storage Service',
            'Online Backup System'
        ],
        correct: [2],
        explanation: 'OBS stands for Object Storage Service, which provides scalable, secure, and highly reliable cloud storage for unstructured data.'
    },
    {
        id: 62,
        type: 'multiple-answer',
        question: 'Which storage classes are available in OBS? (Select all that apply)',
        options: [
            'Standard',
            'Infrequent Access',
            'Archive',
            'Real-time'
        ],
        correct: [0, 1, 2],
        explanation: 'OBS offers Standard (frequently accessed), Infrequent Access (long-term storage with less frequent access), and Archive (cold storage) classes. Real-time is not a storage class.'
    },
    {
        id: 63,
        type: 'true-false',
        question: 'EVS stands for Elastic Volume Service and provides block storage for ECS instances.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. EVS provides persistent block storage volumes that can be attached to ECS instances, offering high performance and reliability.'
    },
    {
        id: 64,
        type: 'multiple-choice',
        question: 'What is the maximum size of a single object that can be uploaded to OBS?',
        options: [
            '5 GB',
            '48.8 TB',
            '100 GB',
            '1 TB'
        ],
        correct: [1],
        explanation: 'OBS supports objects up to 48.8 TB in size, making it suitable for storing large files like videos, backups, and big data sets.'
    },
    {
        id: 65,
        type: 'multiple-choice',
        question: 'Which EVS disk type provides the highest IOPS performance?',
        options: [
            'Common I/O',
            'High I/O',
            'Ultra-high I/O',
            'Standard'
        ],
        correct: [2],
        explanation: 'Ultra-high I/O disks provide the highest IOPS performance, suitable for high-performance databases and applications requiring extremely low latency.'
    },
    {
        id: 66,
        type: 'true-false',
        question: 'OBS buckets can be accessed from anywhere with proper authentication.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. OBS buckets can be accessed over the internet from anywhere with proper authentication and authorization, supporting various access methods including APIs, SDKs, and console.'
    },
    {
        id: 67,
        type: 'multiple-answer',
        question: 'Which features does OBS support? (Select all that apply)',
        options: [
            'Versioning',
            'Lifecycle management',
            'Cross-region replication',
            'Automatic data deletion without policies'
        ],
        correct: [0, 1, 2],
        explanation: 'OBS supports versioning, lifecycle management, and cross-region replication. Data is not automatically deleted without configured policies.'
    },
    {
        id: 68,
        type: 'multiple-choice',
        question: 'What is the primary purpose of EVS snapshots?',
        options: [
            'To increase disk size',
            'To create backups of disk data',
            'To improve performance',
            'To connect to network'
        ],
        correct: [1],
        explanation: 'EVS snapshots create point-in-time backups of disk data, enabling data protection, disaster recovery, and the ability to restore data when needed.'
    },
    {
        id: 69,
        type: 'true-false',
        question: 'SFS (Scalable File Service) provides shared file storage accessible by multiple ECS instances.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. SFS provides fully managed shared file storage based on NFS protocol, allowing multiple ECS instances to access the same file system simultaneously.'
    },
    {
        id: 70,
        type: 'multiple-choice',
        question: 'Which service is best suited for storing unstructured data like images and videos?',
        options: [
            'EVS',
            'OBS',
            'RDS',
            'ECS'
        ],
        correct: [1],
        explanation: 'OBS (Object Storage Service) is ideal for storing unstructured data like images, videos, backups, and logs, offering scalability and cost-effectiveness.'
    },
    {
        id: 71,
        type: 'multiple-answer',
        question: 'Which operations can be performed on OBS objects? (Select all that apply)',
        options: [
            'Upload',
            'Download',
            'Delete',
            'Modify in-place'
        ],
        correct: [0, 1, 2],
        explanation: 'OBS supports upload, download, and delete operations. Objects cannot be modified in-place; you must upload a new version to make changes.'
    },
    {
        id: 72,
        type: 'true-false',
        question: 'EVS disks can be attached to multiple ECS instances simultaneously.',
        options: ['True', 'False'],
        correct: [1],
        explanation: 'False. Standard EVS disks can only be attached to one ECS instance at a time. For shared storage, use SFS (Scalable File Service).'
    },
    {
        id: 73,
        type: 'multiple-choice',
        question: 'What is the purpose of OBS lifecycle management?',
        options: [
            'To increase storage capacity',
            'To automatically transition objects between storage classes',
            'To improve upload speed',
            'To encrypt data'
        ],
        correct: [1],
        explanation: 'Lifecycle management automatically transitions objects between storage classes or deletes them based on configured rules, optimizing storage costs.'
    },
    {
        id: 74,
        type: 'multiple-choice',
        question: 'Which storage service provides the lowest latency access?',
        options: [
            'OBS Archive',
            'OBS Standard',
            'EVS Ultra-high I/O',
            'OBS Infrequent Access'
        ],
        correct: [2],
        explanation: 'EVS Ultra-high I/O provides the lowest latency access as block storage directly attached to compute instances, ideal for performance-critical applications.'
    },
    {
        id: 75,
        type: 'true-false',
        question: 'Data stored in OBS is automatically encrypted at rest.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. OBS provides server-side encryption for data at rest, with options for using service-managed keys or customer-provided keys.'
    },
    {
        id: 76,
        type: 'multiple-answer',
        question: 'Which scenarios are suitable for using OBS Infrequent Access? (Select all that apply)',
        options: [
            'Long-term backups',
            'Compliance archives',
            'Frequently accessed website content',
            'Disaster recovery data'
        ],
        correct: [0, 1, 3],
        explanation: 'OBS Infrequent Access is ideal for long-term backups, archives, and disaster recovery data accessed less frequently. For frequently accessed content, use Standard class.'
    },
    {
        id: 77,
        type: 'multiple-choice',
        question: 'What happens when you delete an EVS disk?',
        options: [
            'Data is immediately recoverable',
            'Data is permanently deleted',
            'Data is moved to OBS',
            'Disk is archived'
        ],
        correct: [1],
        explanation: 'When an EVS disk is deleted, the data is permanently deleted and cannot be recovered. Always create snapshots before deletion if data recovery might be needed.'
    },
    {
        id: 78,
        type: 'true-false',
        question: 'OBS supports multipart upload for large files.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. OBS supports multipart upload, allowing large files to be uploaded in parts for better reliability, performance, and the ability to resume interrupted uploads.'
    },
    {
        id: 79,
        type: 'multiple-choice',
        question: 'Which service should be used for database storage?',
        options: [
            'OBS',
            'EVS',
            'SFS',
            'CDN'
        ],
        correct: [1],
        explanation: 'EVS (Elastic Volume Service) provides block storage with high IOPS and low latency, making it suitable for database workloads requiring consistent performance.'
    },
    {
        id: 80,
        type: 'multiple-answer',
        question: 'Which factors affect OBS storage costs? (Select all that apply)',
        options: [
            'Storage class',
            'Data volume',
            'Number of requests',
            'Bucket name length'
        ],
        correct: [0, 1, 2],
        explanation: 'OBS costs are based on storage class, data volume stored, and number of requests. Bucket name length does not affect costs.'
    },
    {
        id: 81,
        type: 'true-false',
        question: 'EVS disks can be expanded online without stopping the instance.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. EVS supports online expansion, allowing you to increase disk capacity without stopping the attached ECS instance, minimizing downtime.'
    },
    {
        id: 82,
        type: 'multiple-choice',
        question: 'What is the durability of data stored in OBS?',
        options: [
            '99.9%',
            '99.99%',
            '99.999999999% (11 nines)',
            '90%'
        ],
        correct: [2],
        explanation: 'OBS provides 99.999999999% (11 nines) durability by storing multiple redundant copies of data across multiple facilities.'
    },
    {
        id: 83,
        type: 'multiple-choice',
        question: 'Which protocol does SFS (Scalable File Service) use?',
        options: [
            'HTTP',
            'NFS',
            'FTP',
            'SSH'
        ],
        correct: [1],
        explanation: 'SFS uses the NFS (Network File System) protocol, allowing multiple instances to mount and access shared file storage.'
    },
    {
        id: 84,
        type: 'true-false',
        question: 'OBS Archive storage provides immediate access to data.',
        options: ['True', 'False'],
        correct: [1],
        explanation: 'False. OBS Archive is cold storage requiring a restoration process (taking minutes to hours) before data can be accessed, making it suitable for rarely accessed data.'
    },
    {
        id: 85,
        type: 'multiple-answer',
        question: 'Which methods can be used to access OBS? (Select all that apply)',
        options: [
            'Web Console',
            'REST API',
            'SDKs',
            'Direct physical connection'
        ],
        correct: [0, 1, 2],
        explanation: 'OBS can be accessed via Web Console, REST APIs, and SDKs in various programming languages. Physical connection is not applicable for cloud storage.'
    },
    {
        id: 86,
        type: 'multiple-choice',
        question: 'What is the purpose of CBR (Cloud Backup and Recovery)?',
        options: [
            'To increase storage performance',
            'To provide automated backup and recovery services',
            'To reduce storage costs only',
            'To encrypt data'
        ],
        correct: [1],
        explanation: 'CBR provides automated backup and recovery services for EVS disks and ECS instances, ensuring data protection and business continuity.'
    },
    {
        id: 87,
        type: 'true-false',
        question: 'EVS snapshots are incremental backups.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. EVS snapshots are incremental, meaning only changed data blocks are stored after the first full snapshot, reducing storage costs and backup time.'
    },
    {
        id: 88,
        type: 'multiple-choice',
        question: 'Which OBS feature ensures data consistency across regions?',
        options: [
            'Versioning',
            'Cross-region replication',
            'Lifecycle management',
            'Bucket policy'
        ],
        correct: [1],
        explanation: 'Cross-region replication automatically copies objects from a source bucket to destination buckets in different regions, ensuring data consistency and disaster recovery.'
    },
    {
        id: 89,
        type: 'multiple-answer',
        question: 'Which EVS disk types are available? (Select all that apply)',
        options: [
            'Common I/O',
            'High I/O',
            'Ultra-high I/O',
            'Extreme I/O'
        ],
        correct: [0, 1, 2],
        explanation: 'EVS offers Common I/O, High I/O, and Ultra-high I/O disk types with varying performance levels. Extreme I/O is not a standard EVS type.'
    },
    {
        id: 90,
        type: 'true-false',
        question: 'OBS automatically scales to accommodate any amount of data.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. OBS is highly scalable and automatically handles any amount of data without manual intervention, making it ideal for growing data storage needs.'
    }
];

// Module 4: Networking Services (30 questions)
questionBank.module4 = [
    {
        id: 91,
        type: 'multiple-choice',
        question: 'What does VPC stand for in Huawei Cloud?',
        options: [
            'Virtual Private Cloud',
            'Virtual Public Cloud',
            'Virtual Processing Center',
            'Virtual Protocol Connection'
        ],
        correct: [0],
        explanation: 'VPC stands for Virtual Private Cloud, which provides an isolated virtual network environment where you can provision and manage cloud resources.'
    },
    {
        id: 92,
        type: 'multiple-answer',
        question: 'Which components are part of a VPC? (Select all that apply)',
        options: [
            'Subnets',
            'Route tables',
            'Security groups',
            'Physical routers'
        ],
        correct: [0, 1, 2],
        explanation: 'VPC includes subnets, route tables, and security groups as logical components. Physical routers are managed by the cloud provider infrastructure.'
    },
    {
        id: 93,
        type: 'true-false',
        question: 'EIP stands for Elastic IP address.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. EIP (Elastic IP) is a static public IP address that can be dynamically bound to cloud resources for internet access.'
    },
    {
        id: 94,
        type: 'multiple-choice',
        question: 'What is the primary function of a Security Group?',
        options: [
            'Load balancing',
            'Network traffic filtering',
            'Data encryption',
            'DNS resolution'
        ],
        correct: [1],
        explanation: 'Security Groups act as virtual firewalls that control inbound and outbound network traffic to cloud resources based on configured rules.'
    },
    {
        id: 95,
        type: 'multiple-choice',
        question: 'Which service provides load balancing in Huawei Cloud?',
        options: [
            'VPC',
            'ELB (Elastic Load Balance)',
            'NAT Gateway',
            'Direct Connect'
        ],
        correct: [1],
        explanation: 'ELB (Elastic Load Balance) distributes incoming traffic across multiple backend servers, improving application availability and scalability.'
    },
    {
        id: 96,
        type: 'true-false',
        question: 'NAT Gateway allows resources in private subnets to access the internet.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. NAT Gateway enables instances in private subnets to access the internet for updates and external services without exposing them to inbound internet traffic.'
    },
    {
        id: 97,
        type: 'multiple-answer',
        question: 'Which types of ELB are available? (Select all that apply)',
        options: [
            'Classic Load Balancer',
            'Shared Load Balancer',
            'Dedicated Load Balancer',
            'Manual Load Balancer'
        ],
        correct: [1, 2],
        explanation: 'Huawei Cloud offers Shared Load Balancer (for cost-effective scenarios) and Dedicated Load Balancer (for high-performance requirements). Classic and Manual are not standard types.'
    },
    {
        id: 98,
        type: 'multiple-choice',
        question: 'What is the purpose of VPC Peering?',
        options: [
            'To connect to the internet',
            'To connect two VPCs for private communication',
            'To load balance traffic',
            'To encrypt data'
        ],
        correct: [1],
        explanation: 'VPC Peering establishes a private network connection between two VPCs, allowing resources to communicate as if they were in the same network.'
    },
    {
        id: 99,
        type: 'true-false',
        question: 'A subnet can span multiple Availability Zones.',
        options: ['True', 'False'],
        correct: [1],
        explanation: 'False. A subnet is specific to a single Availability Zone. To distribute resources across AZs, you need to create multiple subnets.'
    },
    {
        id: 100,
        type: 'multiple-choice',
        question: 'Which protocol do Security Groups use by default?',
        options: [
            'Allow all traffic',
            'Deny all traffic',
            'Allow outbound, deny inbound',
            'Allow inbound, deny outbound'
        ],
        correct: [2],
        explanation: 'Security Groups default to allowing all outbound traffic and denying all inbound traffic, following a whitelist approach for security.'
    },
    {
        id: 101,
        type: 'multiple-answer',
        question: 'Which services can be assigned an EIP? (Select all that apply)',
        options: [
            'ECS instances',
            'NAT Gateway',
            'ELB',
            'Security Groups'
        ],
        correct: [0, 1, 2],
        explanation: 'EIP can be assigned to ECS instances, NAT Gateways, and ELB. Security Groups are logical rules and cannot have IPs assigned.'
    },
    {
        id: 102,
        type: 'true-false',
        question: 'Direct Connect provides a dedicated network connection from on-premises to Huawei Cloud.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Direct Connect establishes a dedicated, private network connection between your data center and Huawei Cloud, offering higher bandwidth and lower latency.'
    },
    {
        id: 103,
        type: 'multiple-choice',
        question: 'What is the CIDR block range for a VPC?',
        options: [
            'Only 10.0.0.0/8',
            '10.0.0.0/8 to /24, 172.16.0.0/12 to /24, 192.168.0.0/16 to /24',
            'Any public IP range',
            'Only 192.168.0.0/16'
        ],
        correct: [1],
        explanation: 'VPCs can use private IP ranges from 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16 with CIDR blocks between /8 and /24.'
    },
    {
        id: 104,
        type: 'multiple-choice',
        question: 'Which ELB algorithm distributes traffic based on client IP address?',
        options: [
            'Round Robin',
            'Least Connections',
            'Source IP Hash',
            'Random'
        ],
        correct: [2],
        explanation: 'Source IP Hash algorithm distributes requests based on the source IP address, ensuring requests from the same client go to the same backend server.'
    },
    {
        id: 105,
        type: 'true-false',
        question: 'Security Group rules are stateful.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Security Groups are stateful, meaning if you allow inbound traffic, the response traffic is automatically allowed regardless of outbound rules.'
    },
    {
        id: 106,
        type: 'multiple-answer',
        question: 'Which health check protocols does ELB support? (Select all that apply)',
        options: [
            'HTTP',
            'HTTPS',
            'TCP',
            'SMTP'
        ],
        correct: [0, 1, 2],
        explanation: 'ELB supports HTTP, HTTPS, and TCP health checks to monitor backend server availability. SMTP is not a standard health check protocol.'
    },
    {
        id: 107,
        type: 'multiple-choice',
        question: 'What is the purpose of a route table in VPC?',
        options: [
            'To filter traffic',
            'To define network paths for traffic',
            'To assign IP addresses',
            'To encrypt data'
        ],
        correct: [1],
        explanation: 'Route tables define how network traffic is directed within the VPC and to external destinations like the internet or other VPCs.'
    },
    {
        id: 108,
        type: 'true-false',
        question: 'VPN Gateway provides encrypted connection between on-premises and cloud.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. VPN Gateway establishes secure, encrypted IPSec VPN connections between your on-premises network and Huawei Cloud over the internet.'
    },
    {
        id: 109,
        type: 'multiple-choice',
        question: 'Which feature allows automatic failover for ELB backend servers?',
        options: [
            'Health check',
            'Session persistence',
            'Load balancing algorithm',
            'Security group'
        ],
        correct: [0],
        explanation: 'Health checks monitor backend server health and automatically remove unhealthy servers from the load balancing pool, routing traffic only to healthy servers.'
    },
    {
        id: 110,
        type: 'multiple-answer',
        question: 'Which scenarios require a NAT Gateway? (Select all that apply)',
        options: [
            'Private instances need to download updates',
            'Private instances need outbound internet access',
            'Provide inbound internet access to private instances',
            'Private instances need to access external APIs'
        ],
        correct: [0, 1, 3],
        explanation: 'NAT Gateway provides outbound internet access for private instances. For inbound access, use EIP or load balancer with public IP.'
    },
    {
        id: 111,
        type: 'true-false',
        question: 'ELB can distribute traffic across multiple Availability Zones.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. ELB can distribute traffic across backend servers in multiple Availability Zones, improving application availability and fault tolerance.'
    },
    {
        id: 112,
        type: 'multiple-choice',
        question: 'What is the maximum number of EIPs that can be bound to a single ECS instance?',
        options: [
            'Unlimited',
            'One',
            'Five',
            'Ten'
        ],
        correct: [1],
        explanation: 'By default, only one EIP can be bound to a single ECS instance. Multiple EIPs can be achieved through NAT Gateway or load balancers.'
    },
    {
        id: 113,
        type: 'multiple-choice',
        question: 'Which DNS service does Huawei Cloud provide?',
        options: [
            'Domain Name Service (DNS)',
            'Dynamic Naming System',
            'Data Network Service',
            'Direct Name System'
        ],
        correct: [0],
        explanation: 'Huawei Cloud provides DNS (Domain Name Service) for domain name resolution, supporting both public and private DNS zones.'
    },
    {
        id: 114,
        type: 'true-false',
        question: 'VPC flow logs capture network traffic information for monitoring and troubleshooting.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. VPC Flow Logs capture information about IP traffic going to and from network interfaces, useful for security analysis and troubleshooting.'
    },
    {
        id: 115,
        type: 'multiple-answer',
        question: 'Which connection types can be used for hybrid cloud? (Select all that apply)',
        options: [
            'VPN Gateway',
            'Direct Connect',
            'Public Internet only',
            'VPC Peering between regions'
        ],
        correct: [0, 1],
        explanation: 'VPN Gateway and Direct Connect are designed for hybrid cloud connections. Public internet alone lacks security, and VPC Peering is for cloud-to-cloud within Huawei.'
    },
    {
        id: 116,
        type: 'multiple-choice',
        question: 'What is session persistence (sticky sessions) in ELB?',
        options: [
            'Encrypted connections',
            'Routing requests from same client to same server',
            'Health monitoring',
            'Automatic scaling'
        ],
        correct: [1],
        explanation: 'Session persistence ensures that requests from the same client are routed to the same backend server, maintaining session state for applications that require it.'
    },
    {
        id: 117,
        type: 'true-false',
        question: 'Network ACLs are stateless, unlike Security Groups.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. Network ACLs are stateless, meaning return traffic must be explicitly allowed. Security Groups are stateful and automatically allow return traffic.'
    },
    {
        id: 118,
        type: 'multiple-choice',
        question: 'Which service provides content delivery and acceleration?',
        options: [
            'VPC',
            'CDN (Content Delivery Network)',
            'ELB',
            'Direct Connect'
        ],
        correct: [1],
        explanation: 'CDN (Content Delivery Network) caches content at edge locations globally, reducing latency and improving content delivery speed to end users.'
    },
    {
        id: 119,
        type: 'multiple-answer',
        question: 'Which factors affect EIP pricing? (Select all that apply)',
        options: [
            'Bandwidth',
            'Billing mode (by traffic or bandwidth)',
            'Region',
            'IP address numbers'
        ],
        correct: [0, 1, 2],
        explanation: 'EIP pricing depends on bandwidth size, billing mode (traffic or bandwidth), and region. The specific IP numbers (e.g., 1.2.3.4 vs 5.6.7.8) do not affect price.'
    },
    {
        id: 120,
        type: 'true-false',
        question: 'ELB supports both Layer 4 (TCP/UDP) and Layer 7 (HTTP/HTTPS) load balancing.',
        options: ['True', 'False'],
        correct: [0],
        explanation: 'True. ELB supports both Layer 4 (transport layer) load balancing for TCP/UDP traffic and Layer 7 (application layer) for HTTP/HTTPS with advanced routing features.'
    }
];
