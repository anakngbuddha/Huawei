// Quiz Manager - Handles quiz selection and switching between Quiz 1 and Quiz 2

let currentQuizType = null;
let quiz1Data = null;
let quiz2Data = null;

// Quiz 1 Data - 30 questions from quiz.js
const quiz1Questions = [
    {question:"A client wants to deploy their web application to the internet while protecting their backend database servers. What is the best architectural approach?",type:"multiple",options:["Place all servers in a public subnet with EIPs assigned to each","Use NAT Gateway + ECS in public subnet + RDS in private subnet + Security Groups","Deploy everything in a single subnet with Network ACL protection","Use VPC Peering Connection to isolate frontend and backend"],correct:[1],explanation:"The best practice is to use a NAT Gateway for outbound internet access, place web servers in a public subnet, keep databases in a private subnet, and use security groups for access control."},
    {question:"An organization needs to store archived financial records that must be retained for 7 years but will rarely be accessed. Which OBS storage class is most cost-effective?",type:"multiple",options:["OBS Standard","OBS Infrequent Access","OBS Archive","EVS with snapshot backup"],correct:[2],explanation:"OBS Archive storage class has the lowest unit price and is specifically designed for data that is seldom accessed but cannot be discarded."},
    {question:"Two ECSs in different VPCs within the same region cannot communicate by default. True or False?",type:"boolean",options:["True","False"],correct:[0],explanation:"True. VPCs are logically isolated from each other by default. To enable communication between ECSs in different VPCs, you need to create a VPC peering connection."},
    {question:"Which of the following statements about EVS disk reliability are correct? (Select all that apply)",type:"checkbox",options:["EVS uses three-copy redundancy within a single AZ","EVS provides 99.9999999% (9 nines) durability","EVS backups are stored across multiple AZs automatically","Snapshots can be used to quickly restore data from misoperations"],correct:[0,1,3],explanation:"EVS uses three-copy redundancy in a single AZ and provides 9 nines of durability. Snapshots enable quick data restoration."},
    {question:"A company needs to allow multiple ECSs in a private subnet to access the internet for software updates without assigning individual EIPs. What service should they use?",type:"multiple",options:["VPC Peering Connection","NAT Gateway with SNAT rules","Security Groups","Network ACL"],correct:[1],explanation:"NAT Gateway with SNAT rules allows multiple servers in a private subnet to share EIPs for outbound internet access."},
    {question:"What is the maximum size of a single EVS disk?",type:"multiple",options:["16 TB","32 TB","48 TB","Unlimited"],correct:[1],explanation:"EVS supports disks up to 32 TB per disk. OBS supports objects up to 48 TB."},
    {question:"Network ACLs deny all traffic by default when first associated with a subnet. True or False?",type:"boolean",options:["True","False"],correct:[0],explanation:"True. After a network ACL is associated with a subnet, it denies all traffic by default until you add rules to allow specific traffic."},
    {question:"Which billing mode offers the most stable discounts for long-term ECS usage?",type:"multiple",options:["Pay-per-use","Spot pricing","Yearly/Monthly subscription","Reserved instances"],correct:[2],explanation:"Yearly/Monthly subscription billing offers stable discounts and is most suitable for long-term use."},
    {question:"An ECS instance with specifications c6.8xlarge.4 has how many vCPUs?",type:"multiple",options:["4 vCPUs","8 vCPUs","16 vCPUs","32 vCPUs"],correct:[2],explanation:"The '8xlarge' indicates 8 × 2 = 16 vCPUs. The '.4' indicates a 4:1 memory-to-vCPU ratio."},
    {question:"Which services can be used to establish connectivity between VPCs? (Select all that apply)",type:"checkbox",options:["VPC Peering Connection","Security Groups","VPN Connection","EIP"],correct:[0,2],explanation:"VPC Peering Connection and VPN connections can be used to connect VPCs. Security Groups and EIP are not used for VPC-to-VPC connectivity."},
    {question:"OBS provides 99.9999999999% (12 nines) durability. True or False?",type:"boolean",options:["True","False"],correct:[0],explanation:"True. OBS provides 12 nines of durability through multiple copies across multiple AZs."},
    {question:"What is the primary difference between SNAT and DNAT in NAT Gateway?",type:"multiple",options:["SNAT is for outbound traffic, DNAT is for inbound traffic","SNAT is free, DNAT requires payment","SNAT works with TCP only, DNAT works with UDP only","SNAT requires EIP, DNAT does not"],correct:[0],explanation:"SNAT translates source IP addresses for outbound traffic. DNAT translates destination IP addresses for inbound traffic."},
    {question:"A security group has an inbound rule allowing ICMP from 0.0.0.0/0 and an outbound rule allowing all traffic to 0.0.0.0/0. What can instances in this security group do?",type:"multiple",options:["Only respond to ping requests","Ping other servers and be pinged by others","Access any internet resource but cannot be accessed","Both ping and establish any outbound connection"],correct:[3],explanation:"With ICMP allowed inbound and all traffic allowed outbound, instances can both ping others and establish any outbound connections."},
    {question:"Which OBS storage class requires restoration before data can be accessed?",type:"multiple",options:["OBS Standard","OBS Infrequent Access","OBS Archive","All OBS storage classes"],correct:[2],explanation:"OBS Archive storage class requires restoration before data can be accessed. This is a trade-off for the lowest storage costs."},
    {question:"SFS (Scalable File Service) can be accessed by ECSs in different VPCs without any additional configuration. True or False?",type:"boolean",options:["True","False"],correct:[1],explanation:"False. ECSs can only access an SFS file system in the same VPC."},
    {question:"Which features are provided by Bare Metal Server (BMS)? (Select all that apply)",type:"checkbox",options:["Dedicated computing resources with no virtualization overhead","VPCs and security groups for network isolation","Automatic scaling based on demand","Disk backup and restoration"],correct:[0,1,3],explanation:"BMS provides dedicated physical servers with no virtualization, network isolation, and disk backup capabilities. However, BMS does not support automatic scaling."},
    {question:"What is the correct process for configuring a VPC peering connection?",type:"multiple",options:["Create connection → Verify connectivity → Add routes","Add routes → Create connection → Verify connectivity","Create connection → Add routes → Verify connectivity","Verify connectivity → Create connection → Add routes"],correct:[2],explanation:"The correct order is: 1) Create a VPC peering connection, 2) Add routes to route tables, 3) Verify network connectivity."},
    {question:"An ECS has a local disk attached. What happens to the data on the local disk if the ECS is stopped?",type:"multiple",options:["Data is preserved and available when ECS restarts","Data is lost permanently","Data is automatically backed up to OBS","Data is migrated to EVS"],correct:[1],explanation:"Local disks provide super-low latency but data is lost if ECSs are stopped or crashed."},
    {question:"Which statement about EIP (Elastic IP) is correct?",type:"multiple",options:["EIP can be bound to multiple cloud resources simultaneously","EIP can only be billed by bandwidth","EIP provides static public IP addresses with scalable bandwidth","EIP is required for all ECS instances"],correct:[2],explanation:"EIP provides static public IP addresses and scalable bandwidths. It can be bound to many resources but only ONE at any given time."},
    {question:"In a VPC with CIDR block 192.168.0.0/16, which subnet CIDR blocks are valid? (Select all that apply)",type:"checkbox",options:["192.168.0.0/24","192.168.1.0/24","192.168.2.0/24","10.0.0.0/24"],correct:[0,1,2],explanation:"Subnets must be within the VPC's CIDR block. All 192.168.x.x subnets are valid. 10.0.0.0/24 is outside the VPC's address range."},
    {question:"Dedicated Host (DeH) allows multiple tenants to share the same physical server resources. True or False?",type:"boolean",options:["True","False"],correct:[1],explanation:"False. DeH provides a physical server fully dedicated for your own services in a single-tenant environment."},
    {question:"What is the durability level of SFS (Scalable File Service)?",type:"multiple",options:["99.9999999% (9 nines)","99.99999999% (10 nines)","99.9999999999% (12 nines)","99.999999999% (11 nines)"],correct:[1],explanation:"SFS provides 10 nines of durability through three-copy redundancy across multiple AZs."},
    {question:"Which protocols does SFS support for file system access? (Select all that apply)",type:"checkbox",options:["Full NFS protocol support","Full CIFS protocol support","Partial CIFS protocol support","iSCSI protocol"],correct:[0,2],explanation:"SFS provides full NFS protocol support and partial CIFS protocol support. It does not support iSCSI."},
    {question:"When creating a private image from an ECS, what is the recommended state for the ECS?",type:"multiple",options:["Running","Stopped","Deleted","Restarting"],correct:[1],explanation:"When creating an image from an ECS, the ECS should be stopped to ensure data consistency."},
    {question:"EVS billing is based on the amount of disk space actually used. True or False?",type:"boolean",options:["True","False"],correct:[1],explanation:"False. EVS pricing is based on the allocated disk size, regardless of how much space is actually used."},
    {question:"Which services provide encryption capabilities? (Select all that apply)",type:"checkbox",options:["EVS encryption","OBS encryption","SFS encryption","VPC encryption"],correct:[0,1,2],explanation:"EVS, OBS, and SFS all provide encryption capabilities. VPC itself doesn't provide encryption."},
    {question:"What is the maximum size of a single object in OBS?",type:"multiple",options:["5 GB","32 TB","48 TB","Unlimited"],correct:[2],explanation:"OBS allows for the upload of a single object up to 48 TB."},
    {question:"A route table in a VPC can be deleted if it's no longer needed. True or False?",type:"boolean",options:["True","False"],correct:[1],explanation:"False. The default route table that comes with each VPC cannot be deleted."},
    {question:"Which factors should influence your choice of region when deploying resources? (Select all that apply)",type:"checkbox",options:["Compliance requirements","User experience and latency","Region-specific functions and features","Cost optimization opportunities"],correct:[0,1,2,3],explanation:"All four factors are important when selecting a region."},
    {question:"To expose a web service running on port 80 of an ECS with private IP 192.168.1.11 to the internet on port 8080, which NAT Gateway rule type should be used?",type:"multiple",options:["SNAT rule with port mapping","DNAT rule mapping EIP:8080 to 192.168.1.11:80","Both SNAT and DNAT rules","Network ACL rule"],correct:[1],explanation:"DNAT is used to make internal services accessible from the internet. Configure a DNAT rule mapping the EIP's port 8080 to the private IP 192.168.1.11 port 80."}
];

// Quiz 2 Data - 30 scenario-based questions from quiz_2.txt
const quiz2Questions = [
    {scenario:"Your company is migrating to Huawei Cloud and needs to ensure proper access control for different teams. The development team needs full access to ECS and OBS, while the testing team only needs read access to these services.",question:"Which Huawei Cloud service should you use to manage these permissions effectively?",options:["IAM + User Groups + Policies","DEW + KMS + CSMS","CTS + LTS + OBS","VPC + Security Groups + Network ACL"],correct:0,explanation:"IAM (Identity and Access Management) with User Groups and Policies is the standard way to manage fine-grained access control in Huawei Cloud. You can create user groups for different teams and assign specific policies to grant or deny permissions to services like ECS and OBS. DEW is for encryption, CTS is for auditing, and VPC/Security Groups are for network-level access."},
    {scenario:"A Python application running on an ECS needs to access data stored in OBS buckets. You want to avoid storing credentials directly on the ECS for security reasons.",question:"What is the recommended approach to grant the application access to OBS?",options:["Store AK/SK in the application code","Create an IAM agency + Assign OBS permissions + Associate with ECS","Use console username and password","Create a new IAM user for each ECS"],correct:1,explanation:"IAM Agency is the secure way to grant ECS instances access to other services without storing credentials. An agency acts as a trusted intermediary that allows the ECS to assume a role with specific OBS permissions. This follows the principle of least privilege and eliminates the need to store sensitive credentials in application code."},
    {scenario:"Your organization needs to track who deleted a critical ECS instance last night. You need to determine which IAM user performed this action and when.",question:"Which service would help you investigate this incident?",options:["Cloud Eye + CES","DEW + KMS","CTS + LTS + OBS","IAM + Security Groups"],correct:2,explanation:"CTS (Cloud Trace Service) records all API calls and user actions, while LTS (Log Tank Service) stores and analyzes logs. Together they provide comprehensive audit trails showing who performed what action and when. Cloud Eye is for monitoring, DEW is for encryption, and Security Groups are for network access control."},
    {scenario:"You need to securely store database passwords and API keys used by your applications. The secrets should be centrally managed and accessed without hardcoding them in configuration files.",question:"Which DEW component should you use for this requirement?",options:["KMS + Data Keys","CSMS + IAM Agency","EVS Encryption","OBS Server-side Encryption"],correct:1,explanation:"CSMS (Cloud Secret Management Service) is specifically designed for storing and managing secrets like passwords and API keys. Combined with IAM Agency, it provides secure, centralized secret management with fine-grained access control. KMS is for data encryption, EVS and OBS encryption are for storage-level encryption."},
    {scenario:"Your application needs to encrypt sensitive customer data before storing it. You want to use envelope encryption where data keys are encrypted by a master key that never leaves the encryption service.",question:"Which combination provides this security architecture?",options:["OBS + Bucket Policies","EVS + Snapshots","DEW + KMS + CMK + Data Keys","IAM + Access Keys"],correct:2,explanation:"Envelope encryption uses DEW (Data Encryption Workshop) with KMS (Key Management Service) to manage Customer Master Keys (CMK) and Data Keys. The master key never leaves the KMS service, while data keys are used for actual encryption. This provides strong security with key separation and centralized key management."},
    {scenario:"You're building an e-commerce platform that requires a relational database with automatic backups, point-in-time recovery, and the ability to scale read operations during peak shopping hours.",question:"Which database service configuration would best meet these requirements?",options:["GeminiDB + Cassandra API","RDS Primary/Standby + Read Replicas + Automated Backups","DDS + MongoDB Engine","Local Disk + Manual Backups"],correct:1,explanation:"RDS (Relational Database Service) with Primary/Standby provides high availability and automatic failover. Read Replicas allow scaling read operations without affecting the primary database. Automated backups enable point-in-time recovery. GeminiDB is NoSQL, DDS is for MongoDB, and local disks lack reliability."},
    {scenario:"Your application experiences high read traffic and you need to distribute database read requests across multiple nodes while maintaining a single endpoint for the application to connect to.",question:"Which RDS feature should you implement?",options:["Primary/Standby HA","Automated Backup + PITR","Read/Write Splitting + Read Replicas","Cross-AZ Deployment"],correct:2,explanation:"Read/Write Splitting automatically routes read queries to read replicas while write operations go to the primary database. This distributes read load across multiple nodes while maintaining a single connection endpoint. Primary/Standby is for failover, PITR is for recovery, and Cross-AZ is for availability."},
    {scenario:"You need a database solution that can scale to handle petabytes of data with 1000+ nodes for a big data analytics platform processing massive amounts of structured data.",question:"Which database service is designed for this scale?",options:["RDS for MySQL","TaurusDB","GaussDB (Distributed)","DDS"],correct:2,explanation:"GaussDB (Distributed) is designed for massive scale with support for petabytes of data and thousands of nodes. It's optimized for big data analytics with distributed query processing. RDS MySQL is for traditional OLTP, TaurusDB is for high-performance single-instance databases, and DDS is for NoSQL."},
    {scenario:"Your NoSQL application requires millisecond-level response times regardless of data volume, needs to handle massive concurrent requests, and stores semi-structured documents.",question:"Which database type and service would be most appropriate?",options:["RDS for PostgreSQL","GeminiDB + Mongo API","TaurusDB + MySQL Compatible","EVS + Local Storage"],correct:1,explanation:"GeminiDB with MongoDB API provides NoSQL document storage with millisecond-level latency and horizontal scalability for massive concurrent requests. It's optimized for semi-structured data. RDS PostgreSQL is relational, TaurusDB is for high-performance SQL, and EVS is block storage."},
    {scenario:"You need to ensure zero data loss and fast failover (within seconds) for a mission-critical database. The database should maintain three copies of data and support cross-AZ deployment.",question:"Which database service provides these reliability features?",options:["RDS Single Instance","TaurusDB + DFV Storage + RDMA","GeminiDB Basic","Self-managed MySQL on ECS"],correct:1,explanation:"TaurusDB with DFV (Distributed Flash Volume) Storage and RDMA provides zero data loss through three-copy redundancy and fast failover with cross-AZ deployment. RDMA enables ultra-low latency. RDS Single Instance lacks redundancy, GeminiDB Basic is for NoSQL, and self-managed MySQL lacks built-in HA."},
    {scenario:"Two ECS instances in the same VPC cannot communicate with each other, despite being configured with private IP addresses in the same subnet.",question:"What is the most likely cause and solution?",options:["VPC CIDR block conflict - Create new VPC","Security Group rules blocking traffic - Update inbound/outbound rules","NAT Gateway misconfiguration - Add SNAT rule","Missing EIP - Bind EIPs to both ECS"],correct:1,explanation:"Security Groups act as instance-level firewalls. If instances can't communicate despite being in the same subnet, the security group rules are likely blocking traffic. You need to add inbound rules to allow traffic from the source instance's security group. VPC CIDR conflicts wouldn't prevent same-subnet communication, NAT is for internet access, and EIPs are for public IPs."},
    {scenario:"Your company has a production VPC and a testing VPC in the same region. You need to enable private communication between resources in both VPCs without using the Internet.",question:"What is the most cost-effective solution?",options:["Assign EIPs + Internet Gateway","VPC Peering Connection + Route Configuration","NAT Gateway + DNAT Rules","VPN Connection + Customer Gateway"],correct:1,explanation:"VPC Peering Connection is the most cost-effective way to connect VPCs in the same region. It provides private, direct connectivity without internet gateway charges. You configure route tables to direct traffic between VPCs. EIPs and Internet Gateway expose traffic to the internet, and VPN is more expensive for same-region connectivity."},
    {scenario:"You need to allow multiple ECS instances in a private subnet to access the Internet for software updates, but they should not be directly accessible from the Internet.",question:"Which combination provides this capability?",options:["EIP + Bind to each ECS","VPC Peering + Internet Gateway","Public NAT Gateway + SNAT Rule + EIP","Security Group + Outbound Rules Only"],correct:2,explanation:"A Public NAT Gateway with SNAT (Source Network Address Translation) rules allows private instances to initiate outbound connections while remaining unreachable from the internet. The EIP is bound to the NAT Gateway, not individual instances. Binding EIPs directly exposes instances, VPC Peering doesn't provide internet access, and security groups alone can't translate addresses."},
    {scenario:"Your web application runs on ECS instances in a private subnet. You need to expose a specific service on port 80 to the Internet using a single public IP address.",question:"Which NAT Gateway configuration should you use?",options:["SNAT Rule + Port Mapping","DNAT Rule + EIP + Port Mapping (80 → Private IP:80)","VPC Peering + Route Table","Network ACL + Inbound Rules"],correct:1,explanation:"DNAT (Destination Network Address Translation) translates inbound traffic from the internet to private instances. You configure a DNAT rule mapping the EIP's port 80 to the private instance's port 80. SNAT is for outbound traffic, VPC Peering doesn't expose services to internet, and Network ACLs alone can't translate addresses."},
    {scenario:"You need to implement network security with different protection levels: instance-level filtering for specific applications and subnet-level filtering for broad network segments.",question:"Which combination provides layered network security?",options:["IAM Policies + Bucket Policies","Security Groups (Instance) + Network ACL (Subnet)","EIP + NAT Gateway","VPC Peering + Route Tables"],correct:1,explanation:"Security Groups provide instance-level stateful filtering, while Network ACLs provide subnet-level stateless filtering. Together they create defense-in-depth network security. IAM policies are for access control, EIP/NAT are for address translation, and VPC Peering is for connectivity."},
    {scenario:"You need to store large video files (up to 48 TB per file) that will be accessed by users worldwide. The storage should be highly durable with 12 nines reliability and support direct Internet access.",question:"Which storage service meets these requirements?",options:["EVS + Attached to ECS","OBS + Bucket + Internet Access","SFS + NFS Protocol","Local Disk + Instance Storage"],correct:1,explanation:"OBS (Object Storage Service) supports objects up to 48 TB, provides 12 nines durability through multi-AZ replication, and offers direct internet access via HTTP/HTTPS. It's designed for globally distributed content. EVS is block storage, SFS is file storage, and local disks lack durability."},
    {scenario:"Your application has different data access patterns: frequently accessed data needs fast retrieval, while regulatory documents accessed once a year must be retained but can tolerate restore delays.",question:"Which OBS configuration optimizes costs while meeting requirements?",options:["All data in OBS Standard","OBS Standard (Hot) + Lifecycle Policy → Infrequent Access → Archive (Cold)","EVS + Snapshots + OBS Backup","SFS + Multiple File Systems"],correct:1,explanation:"OBS Lifecycle Policies automatically transition data between storage classes based on age. Hot data stays in Standard for fast access, while cold data moves to Archive for cost savings. Archive has lower retrieval speed but much lower storage costs. Using all Standard is expensive, and EVS/SFS don't provide the same cost optimization."},
    {scenario:"An EVS disk containing critical database data was accidentally deleted. You need to recover the data as quickly as possible to minimize downtime.",question:"Which EVS feature enables the fastest recovery?",options:["Three-copy Redundancy (automatic)","EVS Snapshots + Restore","OBS Backup + Download + Restore","Create new disk + Replication"],correct:1,explanation:"EVS Snapshots provide point-in-time backups that can be quickly restored to new disks. Snapshots are stored in OBS but can be restored much faster than downloading from OBS. Three-copy redundancy protects against hardware failure but doesn't help with accidental deletion. OBS backup and replication are slower recovery methods."},
    {scenario:"Your high-performance computing application requires the absolute lowest latency and highest IOPS for temporary processing data that doesn't need to survive instance restarts.",question:"Which storage option provides optimal performance for this use case?",options:["EVS + High I/O","OBS + Standard Storage","ECS Local Disk (i3/d6 instances)","SFS + Turbo"],correct:2,explanation:"ECS Local Disks (i3/d6 instances) provide the absolute lowest latency and highest IOPS because they're physically attached to the compute node. They're ideal for temporary data that doesn't require persistence. EVS has network latency, OBS is for object storage, and SFS is for shared file access."},
    {scenario:"Multiple ECS instances need simultaneous read/write access to shared files using standard file protocols. The storage should automatically scale and provide high bandwidth.",question:"Which service should you implement?",options:["EVS + Attach to multiple ECS","OBS + SDK Access","SFS + NFS/CIFS Protocol + Same VPC","Local Disk + Replication"],correct:2,explanation:"SFS (Scalable File Service) provides shared file storage accessible via standard NFS/CIFS protocols. Multiple instances in the same VPC can simultaneously read/write with automatic scaling. EVS can't be attached to multiple instances, OBS requires SDK integration, and local disks can't be shared."},
    {scenario:"You're designing a three-tier web architecture with web servers, application servers, and a database. Traffic should be distributed across web servers, and database should have high availability with automatic failover.",question:"Which architecture provides the best availability and scalability?",options:["ECS + ELB + RDS Primary/Standby Across AZs","ECS + EIP + Single RDS Instance","ECS + NAT Gateway + DDS Single Node","BMS + VPC Peering + Local Database"],correct:0,explanation:"ELB (Elastic Load Balancer) distributes traffic across multiple ECS instances for scalability. RDS Primary/Standby across AZs provides automatic failover and high availability. This architecture is resilient to instance and AZ failures. Single instances lack scalability, DDS is NoSQL, and BMS with local database lacks HA."},
    {scenario:"Your application handles sensitive healthcare data. You need encryption at rest, encryption in transit, access auditing, and fine-grained access control with compliance certifications.",question:"Which combination provides comprehensive security compliance?",options:["VPC + Security Groups","IAM + Policies + DEW + KMS + CTS + Encryption","EIP + NAT Gateway + Network ACL","OBS + Bucket Policies Only"],correct:1,explanation:"Comprehensive security compliance requires: IAM for access control, DEW+KMS for encryption at rest, TLS for encryption in transit, and CTS for audit logging. Together they provide defense-in-depth security meeting healthcare compliance standards. VPC/Security Groups are network-level only, EIP/NAT are for connectivity, and bucket policies alone are insufficient."},
    {scenario:"You need to enable version control for critical configuration files in OBS to protect against accidental modifications or deletions, with the ability to restore previous versions.",question:"Which OBS feature should you enable?",options:["Bucket Policies + ACL","OBS Versioning + Delete Markers","Lifecycle Management + Archive","Cross-Region Replication"],correct:1,explanation:"OBS Versioning maintains multiple versions of objects, allowing you to restore previous versions if files are accidentally modified or deleted. Delete Markers track deletion history. Bucket Policies control access, Lifecycle Management handles storage transitions, and Cross-Region Replication is for disaster recovery."},
    {scenario:"Your database-driven application needs to handle complex SQL queries, transactions with ACID compliance, and maintain strong consistency across related data tables.",question:"Which database type and service is most appropriate?",options:["Non-Relational + GeminiDB","Relational + RDS for MySQL + ACID Support","Object Storage + OBS","Cache + Redis API"],correct:1,explanation:"Relational databases like RDS for MySQL provide ACID transactions, complex query support via SQL, and strong consistency across related tables through foreign keys and constraints. GeminiDB is NoSQL without ACID, OBS is object storage, and Redis is a cache, not a primary database."},
    {scenario:"You're building a gaming platform that needs to store player profiles with flexible schema, handle millions of concurrent reads/writes, and scale horizontally with eventual consistency acceptable.",question:"Which database solution fits this use case?",options:["RDS for SQL Server + Read Replicas","GeminiDB + Redis/Cassandra API + Distributed Storage","TaurusDB + MySQL Compatible","EVS + File Storage"],correct:1,explanation:"GeminiDB with Redis/Cassandra API provides flexible schema, horizontal scalability, and eventual consistency for massive concurrent operations. Cassandra is designed for distributed gaming data. RDS SQL Server lacks horizontal scalability, TaurusDB is single-instance, and EVS is block storage."},
    {scenario:"Your on-premises data center needs to connect to Huawei Cloud VPC with a secure, private connection for hybrid cloud deployment. Resources in both locations must communicate seamlessly.",question:"Which connectivity solution should you implement?",options:["VPC Peering Connection","EIP + Public Internet","VPN Gateway + Direct Connect","NAT Gateway + DNAT"],correct:2,explanation:"VPN Gateway provides encrypted tunnels over the internet, while Direct Connect offers dedicated private connectivity. Together they provide secure hybrid cloud connectivity. VPC Peering only connects VPCs, EIP exposes traffic to internet, and NAT is for address translation, not hybrid connectivity."},
    {scenario:"You need to implement a defense-in-depth security strategy for your VPC with multiple protection layers: subnet-level filtering, instance-level filtering, and application-level access control.",question:"Which layered approach provides comprehensive protection?",options:["Security Groups + EIP Only","Network ACL (Subnet) + Security Groups (Instance) + IAM (Application)","VPC Peering + Route Tables","NAT Gateway + Single Security Group"],correct:1,explanation:"Defense-in-depth requires multiple layers: Network ACLs for subnet-level stateless filtering, Security Groups for instance-level stateful filtering, and IAM for application-level access control. This creates comprehensive protection against threats at different layers. Single security groups or connectivity solutions alone are insufficient."},
    {scenario:"Your RDS database needs point-in-time recovery capability to restore data to any moment within the last 7 days, including the ability to recover from logical errors or data corruption.",question:"Which RDS backup configuration enables this capability?",options:["Manual Full Backups Only","Automated Backup + Binlog Backup + PITR","Snapshots Every 24 Hours","Three-copy Redundancy"],correct:1,explanation:"PITR (Point-in-Time Recovery) requires Automated Backups combined with Binlog Backup. Automated backups provide full database snapshots, while binlog captures all transactions, enabling recovery to any specific moment. Manual backups lack granularity, snapshots are discrete points, and redundancy doesn't enable recovery from logical errors."},
    {scenario:"You need to manage and query your cloud databases through a web console without installing client software, perform SQL operations, analyze slow queries, and get performance recommendations.",question:"Which service provides these database management capabilities?",options:["CTS + Cloud Trace","IAM + Access Keys","DAS + Web Console + Performance Analysis","OBS + Database Backups"],correct:2,explanation:"DAS (Database Administration Service) provides a web console for database management, SQL operations, slow query analysis, and performance recommendations without client installation. CTS is for auditing, IAM is for access control, and OBS is for backups."},
    {scenario:"Your startup is designing a cloud architecture that must handle unpredictable traffic spikes, minimize operational overhead, optimize costs, and maintain high availability across multiple availability zones.",question:"Which architectural pattern best addresses these requirements?",options:["Single AZ + Fixed Capacity + Manual Scaling","Multi-AZ + ELB + Auto Scaling + RDS HA + OBS Storage + NAT Gateway","On-premises Servers + VPN","Single ECS + Local Storage + Public IP"],correct:1,explanation:"Multi-AZ deployment with ELB for load balancing, Auto Scaling for handling traffic spikes, RDS HA for database reliability, and OBS for scalable storage provides a resilient, cost-optimized architecture. Single AZ lacks HA, on-premises lacks cloud elasticity, and single instances can't handle spikes."}
];

function initializeQuizManager() {
    quiz1Data = quiz1Questions;
    quiz2Data = quiz2Questions;
    console.log('Quiz Manager Initialized - Showing Quiz Selection');
    showQuizSelection();
}

function showQuizSelection() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="quiz-selection-screen">
            <div class="quiz-selection-header">
                <h1>Select a Quiz</h1>
                <p>Choose which quiz you'd like to take</p>
            </div>
            
            <div class="quiz-buttons-container">
                <button class="quiz-selection-btn" onclick="startQuiz('quiz1')">
                    <span class="quiz-btn-icon">📋</span>
                    <h2>Quiz 1</h2>
                    <div class="quiz-count">${quiz1Data.length} Questions</div>
                    <p style="font-size: 14px; opacity: 0.7;">Cloud Architecture & Networking</p>
                </button>
                
                <button class="quiz-selection-btn" onclick="startQuiz('quiz2')">
                    <span class="quiz-btn-icon">🎯</span>
                    <h2>Quiz 2</h2>
                    <div class="quiz-count">${quiz2Data.length} Questions</div>
                    <p style="font-size: 14px; opacity: 0.7;">Security & Compliance</p>
                </button>
            </div>
        </div>
    `;
    currentQuizType = null;
}

// Global quiz state
let quizState = {
    currentQuestion: 0,
    score: 0,
    userAnswers: [],
    answered: false,
    quizData: null,
    quizType: null,
    quizTitle: null,
    startTime: null,
    quizTime: 0
};

function startQuiz(quizType) {
    currentQuizType = quizType;
    const quizContainer = document.getElementById('quiz-container');
    
    // Determine which quiz data to use
    quizState.quizData = quizType === 'quiz1' ? quiz1Data : quiz2Data;
    quizState.quizTitle = quizType === 'quiz1' ? 'Quiz 1: Cloud Architecture & Networking' : 'Quiz 2: Security & Compliance';
    quizState.quizType = quizType;
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.userAnswers = [];
    quizState.answered = false;
    quizState.startTime = Date.now();
    
    displayQuestion();
    setupKeyboardNavigation();
}

function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = quizState.quizData[quizState.currentQuestion];
    let optionsHTML = '';
    
    if (question.type === 'checkbox') {
        question.options.forEach((option, index) => {
            optionsHTML += `
                <div class="quiz-option">
                    <input type="checkbox" id="option${index}" name="answer" value="${index}">
                    <label for="option${index}">${option}</label>
                </div>
            `;
        });
    } else {
        question.options.forEach((option, index) => {
            optionsHTML += `
                <div class="quiz-option">
                    <input type="radio" id="option${index}" name="answer" value="${index}">
                    <label for="option${index}">${option}</label>
                </div>
            `;
        });
    }
    
    let scenarioHTML = '';
    if (question.scenario) {
        scenarioHTML = `<div class="quiz-scenario">${question.scenario}</div>`;
    }
    
    const timeElapsed = Math.floor((Date.now() - quizState.startTime) / 1000);
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    quizContainer.innerHTML = `
        <div class="quiz-question-container">
            <div class="quiz-header">
                <button class="quiz-back-btn" id="backBtn">
                    <i class="fas fa-arrow-left"></i> Back
                </button>
                <div class="quiz-question-counter">Question ${quizState.currentQuestion + 1} of ${quizState.quizData.length}</div>
                <div class="quiz-timer" style="font-size: 14px; color: #666;">⏱️ ${timeDisplay}</div>
            </div>
            
            <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${((quizState.currentQuestion + 1) / quizState.quizData.length) * 100}%"></div>
            </div>
            
            <div class="quiz-content">
                <h2 class="quiz-title">${quizState.quizTitle}</h2>
                ${scenarioHTML}
                <div class="quiz-question-text">${question.question}</div>
                <div class="quiz-options-list" id="optionsContainer">
                    ${optionsHTML}
                </div>
                <div id="feedback" class="quiz-feedback" style="display:none;">
                    <div id="feedbackContent"></div>
                    <div id="explanationContent" style="margin-top: 10px; font-size: 14px;"></div>
                </div>
                <div class="quiz-keyboard-hints" style="margin-top: 20px; padding: 10px; background: #f5f5f5; border-radius: 5px; font-size: 12px; color: #666;">
                    💡 <strong>Keyboard Shortcuts:</strong> Arrow Keys (← →) to navigate | Enter to submit | Esc to go back
                </div>
            </div>
            
            <div class="quiz-navigation">
                <button class="quiz-nav-btn" id="prevBtn" ${quizState.currentQuestion === 0 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left"></i> Previous (← or A)
                </button>
                <button class="quiz-nav-btn" id="submitBtn" style="display: ${quizState.answered ? 'none' : 'block'}">
                    Submit Answer (Enter)
                </button>
                <button class="quiz-nav-btn" id="nextBtn" style="display: ${quizState.answered ? 'block' : 'none'}">
                    ${quizState.currentQuestion === quizState.quizData.length - 1 ? 'Finish (→)' : 'Next (→)'} <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('backBtn').addEventListener('click', goBackToSelection);
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('submitBtn').addEventListener('click', submitAnswer);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    
    // Add option selection listeners
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.addEventListener('change', () => {
            quizState.answered = false;
            document.getElementById('submitBtn').disabled = false;
        });
        input.addEventListener('click', (e) => {
            if (e.target.type === 'radio') {
                quizState.answered = false;
                document.getElementById('submitBtn').disabled = false;
            }
        });
    });
    
    // Restore previous answer if exists
    if (quizState.userAnswers[quizState.currentQuestion]) {
        quizState.userAnswers[quizState.currentQuestion].forEach(answerIndex => {
            const input = document.getElementById(`option${answerIndex}`);
            if (input) input.checked = true;
        });
    }
}

function submitAnswer() {
    const question = quizState.quizData[quizState.currentQuestion];
    const inputs = document.querySelectorAll('input[name="answer"]:checked');
    
    if (inputs.length === 0) {
        alert('Please select an answer');
        return;
    }
    
    const selectedAnswers = Array.from(inputs).map(input => parseInt(input.value));
    quizState.userAnswers[quizState.currentQuestion] = selectedAnswers;
    
    // Check if correct
    const correctAnswer = Array.isArray(question.correct) ? question.correct : [question.correct];
    const isCorrect = JSON.stringify(selectedAnswers.sort((a, b) => a - b)) === 
                     JSON.stringify(correctAnswer.sort((a, b) => a - b));
    
    if (isCorrect) {
        quizState.score++;
    }
    
    // Show feedback with explanation
    const feedbackDiv = document.getElementById('feedback');
    const feedbackContent = document.getElementById('feedbackContent');
    const explanationContent = document.getElementById('explanationContent');
    
    feedbackContent.innerHTML = isCorrect ? 
        '<div class="correct-answer"><i class="fas fa-check-circle"></i> Correct!</div>' :
        '<div class="incorrect-answer"><i class="fas fa-times-circle"></i> Incorrect</div>';
    
    if (question.explanation) {
        explanationContent.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
    }
    
    feedbackDiv.style.display = 'block';
    
    quizState.answered = true;
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'block';
}

window.nextQuestion = function() {
    if (quizState.currentQuestion < quizState.quizData.length - 1) {
        quizState.currentQuestion++;
        quizState.answered = false;
        displayQuestion();
    } else {
        showResults();
    }
};

window.previousQuestion = function() {
    if (quizState.currentQuestion > 0) {
        quizState.currentQuestion--;
        quizState.answered = false;
        displayQuestion();
    }
};

function setupKeyboardNavigation() {
    document.addEventListener('keydown', handleKeyboardInput);
}

function handleKeyboardInput(e) {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer || quizContainer.innerHTML.trim() === '') return;
    
    switch(e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
            e.preventDefault();
            previousQuestion();
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            e.preventDefault();
            if (quizState.answered) {
                nextQuestion();
            }
            break;
        case 'Enter':
            e.preventDefault();
            if (!quizState.answered) {
                submitAnswer();
            } else {
                nextQuestion();
            }
            break;
        case 'Escape':
            e.preventDefault();
            goBackToSelection();
            break;
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    const timeElapsed = Math.floor((Date.now() - quizState.startTime) / 1000);
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const percentage = Math.round((quizState.score / quizState.quizData.length) * 100);
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
        message = 'Outstanding! Excellent performance!';
        emoji = '🎉';
    } else if (percentage >= 75) {
        message = 'Great job! You have a solid understanding!';
        emoji = '👍';
    } else if (percentage >= 60) {
        message = 'Good effort! Keep learning!';
        emoji = '📚';
    } else {
        message = 'Keep practicing! Review the materials!';
        emoji = '💪';
    }
    
    quizContainer.innerHTML = `
        <div class="quiz-results-container">
            <div class="results-header">
                <h2>Quiz Completed! ${emoji}</h2>
            </div>
            
            <div class="results-score">
                <div class="score-circle">
                    <div class="score-number">${quizState.score}/${quizState.quizData.length}</div>
                    <div class="score-percentage">${percentage}%</div>
                </div>
            </div>
            
            <div class="results-message">${message}</div>
            
            <div class="results-stats" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 30px 0; text-align: center;">
                <div style="padding: 15px; background: #f5f5f5; border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: #000;">${quizState.score}</div>
                    <div style="font-size: 12px; color: #666; margin-top: 5px;">Correct</div>
                </div>
                <div style="padding: 15px; background: #f5f5f5; border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: #000;">${quizState.quizData.length - quizState.score}</div>
                    <div style="font-size: 12px; color: #666; margin-top: 5px;">Incorrect</div>
                </div>
                <div style="padding: 15px; background: #f5f5f5; border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: #000;">⏱️ ${timeDisplay}</div>
                    <div style="font-size: 12px; color: #666; margin-top: 5px;">Time Taken</div>
                </div>
            </div>
            
            <div class="results-actions">
                <button class="quiz-nav-btn" id="retakeBtn">
                    <i class="fas fa-redo"></i> Retake Quiz
                </button>
                <button class="quiz-nav-btn" id="backSelectionBtn">
                    <i class="fas fa-arrow-left"></i> Back to Selection
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('retakeBtn').addEventListener('click', retakeQuiz);
    document.getElementById('backSelectionBtn').addEventListener('click', goBackToSelection);
}

function retakeQuiz() {
    startQuiz(quizState.quizType);
}

window.goBackToSelection = function() {
    showQuizSelection();
};

// Make functions globally accessible
window.startQuiz = startQuiz;
window.initializeQuizManager = initializeQuizManager;

// Handle tab switching
function setupQuizTabListener() {
    const quizButton = document.querySelector('[data-tab="quiz"]');
    if (quizButton) {
        quizButton.addEventListener('click', function() {
            setTimeout(() => {
                const quizContainer = document.getElementById('quiz-container');
                if (quizContainer && quizContainer.innerHTML.trim() === '') {
                    initializeQuizManager();
                }
            }, 100);
        });
    }
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setupQuizTabListener();
    });
} else {
    // DOM is already loaded
    setupQuizTabListener();
}
