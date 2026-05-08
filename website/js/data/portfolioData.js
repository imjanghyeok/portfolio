export const portfolioData = {
  profile: {
    name: "임장혁",
    role: "Backend Developer",
    eyebrow: "Backend Developer Portfolio",
    headline: "설명할 수 있는 코드를 작성하는 백엔드 개발자",
    description: "비전공자로 개발을 시작했지만, 꾸준한 학습과 실전을 통해 개발자로 성장해 왔습니다. 다양한 프로젝트와 동아리 활동을 통해 자기주도라는 것은 단순히 혼자 앞서 나가는 것이 아니라, 스스로 팀에 기여할 수 있는 지점을 찾아내고 실천하는 것임을 배웠습니다.",
    status: "Backend Developer Portfolio",
    focus: "Java(Spring · Spring Boot) · javascript/typescript(node.js · nest.js) · LLM",
    github: "imjanghyeok",
    email: "qkdrhkgn23@naver.com",
    blog: "https://dlaljh.tistory.com/",
    resumeUrl: "../assets/resume.pdf"
  },
  about: {
    title: "AI가 작성한 코드를 검증할 수 있는 개발자를 지향합니다.",
    description: "단순히 AI를 통해서 코드를 작성하는 것이 아니라, AI가 작성한 코드를 이해하고, 그 코드가 어떻게 동작하는지 설명할 수 있는 능력을 키우고자 합니다.",
    features: [
      {
        title: "문제를 혼자 푸는 것보다, 함께 풀 수 있는 구조를 만들고 싶습니다.",
        description: "다양한 프로젝트를 경험하면서, 문제를 정의하는 것이 팀의 목표를 명확히 하고, 팀원으로 해야 할 일을 찾아 협업할 수 있다는 것을 깨달았습니다."
      },
      {
        title: "함께 일하고 싶은 개발자, 함께 자라는 개발자",
        description: "동아리 대표로서 세션 활동을 통해 지식 공유와 소통의 가치를 실천하며, 해커톤 공동 개최 등 다양한 협업을 경험했습니다."
      },
      {
        title: "“왜?”라는 질문에 답할 수 있는 코드",
        description: "활발한 코드 리뷰, 자세한 PR을 통해서 설명할 수 있는 코드, 설득력이 있는 구조를 지향합니다."
      }
    ]
  },
  skills: [
    {
      category: "Backend",
      tags: ["Java", "Spring Boot", "JavaScript", "TypeScript", "NestJS", "Python", "Django(DRF)"]
    },
    {
      category: "Database & Message Queue",
      tags: ["MySQL", "Postgresql", "Redis", "MongoDB", "Kafka", "JPA", "TypeORM"]
    },
    {
      category: "Infra / DevOps",
      tags: ["Docker(Docker-compose)", "NCP", "AWS(EC2, Route53, S3)", "GitHub Actions", "Nginx"]
    },
    {
      category: "Testing & Monitoring",
      tags: ["Jest", "JUnit", "k6", "Checkstyle"]
    }
  ],
  projects: [
    {
      id: "synapse",
      type: "Main Project",
      date: "2025.12 - 2026.02",
      title: "Synapse(PSI) - AI 면접 시뮬레이션 서비스",
      description: "사용자의 포트폴리오를 기반으로 AI 면접관이 개인화된 질문과 피드백을 제공하는 서비스입니다.",
      points: [
        "LLM 비결정성 제어를 위한 서버 중심 면접 흐름 설계 및 종료 결정 엔진 구축",
        "TTL 기반 인메모리 구조(KeySetStore)와 Min-Heap 스케줄러를 활용한 세션 관리",
        "TypeORM Migration 도입 및 local/production 환경별 DB 운영 안정성 확보",
        "GitHub Actions CI 파이프라인(Lint, Build, Unit, E2E Test) 및 배포 품질 게이트 구축",
        "Docker 기반 빌드 최적화를 통해 이미지 크기를 1.2GB에서 250MB로 경량화"
      ],
      tags: ["NestJS", "TypeScript", "TypeORM", "MySQL", "Redis", "Docker", "GitHub Actions"],
      links: {
        github: "https://github.com/boostcampwm2025/web23-Synapse"
      },
      troubleshooting: [
        {
          title: "LLM 비결정성을 서버 정책으로 제어한 AI 면접 흐름 안정화",
          situation: "AI 면접관이 질문을 중복 생성하거나 종료 조건을 무시하는 등 LLM의 비결정성으로 인해 면접 흐름이 깨지는 문제가 있었습니다.",
          target: "사용자 경험 및 안정성",
          reason: "LLM 응답은 확률적 특성을 가지므로, 단순 프롬프트만으로는 서비스의 핵심 비즈니스 로직(종료 시점, 중복 방지)을 완벽히 보장하기 어려웠습니다.",
          process: "LLM의 응답을 그대로 신뢰하지 않고 서버 주도의 제어 구조를 구현했습니다. TTL, 최대 턴 수, 전체 이력 기반 중복 감지 로직을 추가하고, 조건 도달 시 서버가 `isLast: true`를 강제하는 종료 결정 엔진을 구축했습니다. 또한 JSON Schema를 적용해 응답 형식을 강제했습니다.",
          role: "Author",
          result: "면접이 무한히 이어지거나 중복 질문으로 흐름이 깨지는 문제를 방지하여, AI의 자유도를 유지하면서도 서비스 안정성을 확보했습니다."
        },
        {
          title: "실시간 인터뷰 세션 상태를 TTL 기반 인메모리 구조로 관리",
          situation: "면접 중 발생하는 임시 상태(질문 이력, 방문 주제 등)를 DB에 저장하면 영속성이 과하고, 단순 메모리 Map은 만료 처리가 어려워 메모리 누수 위험이 있었습니다.",
          target: "성능 및 자원 효율성",
          reason: "인터뷰 중간 상태는 영구 보존보다 제한 시간 내 흐름 제어에 가깝기 때문에 DB 접근 비용을 줄이면서도 안전한 만료 처리가 필요했습니다.",
          process: "TTL 기반 인메모리 저장소인 `KeySetStore`를 구현하고, 만료된 세션을 효율적으로 정리하기 위해 `MinHeapScheduler`를 도입했습니다. 이를 통해 만료 시간이 임박한 상태를 O(log N) 복잡도로 관리하도록 설계했습니다.",
          role: "Author",
          result: "세션성 데이터의 책임을 분리하여 DB 부하를 줄였으며, 명시적인 만료 처리를 통해 서버 메모리를 안정적으로 관리하게 되었습니다."
        },
        {
          title: "문서 도메인 삭제 정합성과 성능을 고려한 DB Cascade 설계",
          situation: "포트폴리오, 자기소개서 등 연관된 엔티티가 많은 데이터 삭제 시, 고아 데이터가 남거나 ORM의 개별 삭제로 인한 성능 저하 우려가 있었습니다.",
          target: "데이터 정합성 및 성능",
          reason: "ORM의 `remove()`는 엔티티를 메모리에 로드한 뒤 라이프사이클을 거치므로 일괄 삭제 시 부하가 크고, 수동 삭제는 실수로 인한 누락 위험이 있었습니다.",
          process: "TypeORM 관계 설정에서 DB 레벨 `onDelete: CASCADE`를 적용하여 원자적 삭제를 보장했습니다. 일괄 삭제 시에는 `delete()`를 활용해 불필요한 엔티티 로딩을 배제하고, 요청 수와 실제 삭제 수를 응답 DTO로 반환하여 정합성을 확인하도록 했습니다.",
          role: "Author",
          result: "데이터 무결성을 DB 계층에서 보장함과 동시에 삭제 성능을 최적화하였으며, 클라이언트에게 명확한 처리 결과를 제공하게 되었습니다."
        },
        {
          title: "운영 DB 안전성을 위해 synchronize 의존에서 Migration 기반 전환",
          situation: "개발 단계에서 사용하던 `synchronize: true` 옵션은 운영 환경에서 의도치 않은 스키마 변경이나 데이터 유실을 초래할 위험이 있었습니다.",
          target: "운영 안정성 및 데이터 보호",
          reason: "운영 DB의 스키마 변경 이력을 명시적으로 관리하고, 배포 시점에 안전하게 반영할 수 있는 프로세스가 부재했습니다.",
          process: "`synchronize: false`를 적용하고 TypeORM Migration 인프라를 구축했습니다. 환경별로 `migrationsRun`을 조건부 설정하고, `SeedService`가 로컬 환경에서만 동작하도록 제한하여 운영 DB에 불필요한 초기화가 발생하지 않도록 분리했습니다.",
          role: "Author",
          result: "스키마 변경 이력의 추적성을 확보하고 운영 DB에 대한 직접적인 조작 위험을 제거하여 시스템 배포의 안정성을 높였습니다."
        },
        {
          title: "CI 기반 E2E/블랙박스 테스트와 배포 품질 게이트 구축",
          situation: "기능이 확장됨에 따라 수동 테스트만으로는 API 회귀 오류를 방지하기 어려웠고, 외부 AI API 연동 실패에 대한 방어 기제가 필요했습니다.",
          target: "개발 생산성 및 품질 보장",
          reason: "코드 변경이 기존 모듈(인터뷰, 서류 관리 등)에 미치는 영향을 즉각적으로 파악할 수 있는 자동화된 검증 체계가 부족했습니다.",
          process: "GitHub Actions에 MySQL 서비스 컨테이너를 연동하고 CI 단계를 Lint, Build, Unit, E2E Tests로 세분화했습니다. 특히 실제 AI API 호출을 포함한 최종 저지선 성격의 테스트를 구축하여 배포 전 실제 동작을 검증하도록 했습니다.",
          role: "Author",
          result: "PR 단계에서 결함을 조기 발견하여 운영 환경 장애 유입을 차단했으며, 팀 내에서 안정적으로 코드를 변경할 수 있는 신뢰 환경을 조성했습니다."
        },
        {
          title: "제한된 서버 환경을 고려한 Docker 배포 및 빌드 최적화",
          situation: "1GB RAM 수준의 제한된 서버 리소스에서 Docker 이미지가 너무 크면 배포 속도가 느려지고 리소스 부족으로 배포가 실패하는 경우가 있었습니다.",
          target: "인프라 효율성 및 배포 안정성",
          reason: "빌드 산출물과 불필요한 의존성이 이미지에 포함되어 이미지 크기가 비대해졌고, 이는 전송 및 실행 단계의 병목이 되었습니다.",
          process: "멀티 스테이지 빌드와 `.dockerignore` 최적화를 적용했습니다. 빌드 결과물을 1.2GB에서 250MB로 경량화하였고, VPC와 Private DB 보안 설정을 고려한 Production용 Docker Compose 및 배포 워크플로우를 구성했습니다.",
          role: "Author",
          result: "이미지 크기를 약 80% 절감하여 배포 효율을 극대화했으며, 운영 환경 분리를 통해 보안성과 인프라 관리의 용이성을 확보했습니다."
        }
      ]
    },
    {
      id: "smiletogether",
      type: "Main Project",
      date: "2024.07 - 2024.08",
      title: "SmileTogether - MSA 기반 협업 도구",
      description: "Slack형 협업 메신저 서비스에서 채팅·히스토리·멤버·알림 서버의 백엔드 구현과 서버 간 연동을 담당했습니다.",
      points: [
        "WebSocket/STOMP 기반 채팅 서버에서 메시지를 Kafka로 produce/consume하는 구조를 구현해 다중 채팅 서버 간 메시지 전파가 가능한 실시간 채팅 기반 마련",
        "Kafka를 활용한 메시지 히스토리 서버를 구현하고 MongoDB Document, Repository, Consumer, 조회 API를 작성해 채팅 메시지 저장/조회 책임을 별도 서버로 분리",
        "Kafka 비동기 저장 구조에서 메시지 조회 시점의 누락 가능성을 발견하고, partition offset lag을 확인해 최대 5회·100ms 간격으로 polling 후 DB 조회하는 방식으로 메시지 정합성 보강",
        "채팅/히스토리 서버에서 고정된 프로필 값을 사용하던 문제를 제거하고, 서버 간 HTTP 통신과 JWT Extractor를 구현해 Space 서버로부터 실제 프로필 정보를 받아 DTO에 반영하도록 개선",
        "Kafka 기반 알림 서버 MVP를 구현해 채팅 메시지를 consume한 뒤 FCM Web Push로 전송하는 구조를 만들고, FCM 구독 정보 저장 API와 푸시 전송 로직 구성",
        "MSA 로컬 테스트 복잡도를 해결하기 위해 chat/history 서버 단독 및 통합 Docker Compose 환경을 분리하고, CORS·컨테이너명 기반 통신·Mongo/Kafka 환경 분리 문제를 보완"
      ],
      tags: ["Spring Boot", "Kafka", "MongoDB", "FCM", "MSA"],
      links: {
        github: "https://github.com/sgdevcamp2025/smiletogether"
      },
      troubleshooting: [
        {
          title: "WebSocket + Kafka 기반 채팅 서버 구현과 서버 간 메시지 전파 구조 설계",
          situation: "단일 채팅 서버에서는 WebSocket으로 메시지를 전달할 수 있지만, 채팅 서버가 여러 개로 늘어날 경우 서버 간 메시지 동기화가 필요했습니다.",
          target: "사용자 경험, 안정성, 확장성",
          reason: "채널 기반 협업 메신저 특성 상 사용자가 보낸 메시지가 실시간으로 다른 사용자에게 전달되어야 했습니다.",
          process: "클라이언트가 WebSocket으로 메시지를 전송하면 서버가 이를 Kafka에 produce하고, Kafka를 consume한 채팅 서버가 다시 WebSocket으로 클라이언트에게 전달하는 구조를 구성했습니다. 단위 및 통합 테스트를 작성해 연동 가능성을 검증했습니다.",
          role: "Author",
          result: "채널 메시지를 WebSocket으로 송수신하고 Kafka를 통해 다른 채팅 서버로 전파할 수 있는 기반을 만들었습니다."
        },
        {
          title: "Kafka 기반 메시지 히스토리 서버 구현과 soft delete/검색/페이징 흐름 구성",
          situation: "실시간 채팅 메시지는 화면 전달 뿐만 아니라 이후 조회를 위해 저장되어야 했고, 특정 기간 검색, 페이징, 삭제 처리, 이모지 반응 기능이 필요했습니다.",
          target: "데이터 정합성, 사용자 경험, 유지보수성",
          reason: "채팅 서버와 히스토리 서버가 분리된 환경이라 실시간 전달과 저장/조회 책임을 분리하는 구조가 필요했고 물리 삭제 시 기록 추적이 어렵다는 제약이 있었습니다.",
          process: "채팅 서버가 Kafka로 메시지를 발행하면 history-server가 이를 consume하여 MongoDB에 저장하도록 구성했습니다. 메시지 삭제는 deleted_at 기반 soft delete로 처리하고 페이징을 고려한 조회 API 기반을 마련했습니다.",
          role: "Author",
          result: "채팅 서버와 분리된 메시지 히스토리 서버를 구축하여 메시지 저장 및 조회 책임을 분리하고 논리 삭제와 페이징 기반을 마련했습니다."
        },
        {
          title: "Kafka offset lag 확인을 통한 채팅 메시지 조회 정합성 보장",
          situation: "사용자가 메시지를 보낸 직후 히스토리를 조회하면, 아직 consume되지 않은 메시지가 누락되어 사용자 화면에 안 보이는 문제가 발생할 수 있었습니다.",
          target: "데이터 정합성, 안정성, 사용자 경험",
          reason: "Kafka 기반 비동기 저장 구조에서는 producer가 메시지를 보낸 시점과 consumer가 DB에 저장한 시점 사이에 지연이 존재했습니다.",
          process: "KafkaLagChecker를 구현해 채널에 해당하는 파티션의 latest offset과 committed offset을 비교하도록 했습니다. lag이 존재하면 최대 5회, 100ms 간격으로 polling하여 consume 완료 여부를 확인한 뒤 DB에서 메시지를 조회하도록 개선했습니다.",
          role: "Author",
          result: "메시지 누락 가능성을 줄이는 정합성 확인 흐름을 추가하여 조회 시점의 데이터 정합성을 보장했습니다."
        },
        {
          title: "MSA 서버 간 통신을 위한 프로필 조회 API와 JWT Extractor 구현",
          situation: "채팅/히스토리 서버에서 메시지 처리 시 사용자 프로필 정보가 필요했으나 다른 서버에 흩어져 있어 고정된 값이나 더미 데이터를 사용하는 불일치가 있었습니다.",
          target: "데이터 정합성, 유지보수성, 서버 간 연동",
          reason: "HTTP 요청과 STOMP 요청 양쪽 모두에서 JWT를 추출하고 여러 서버와 인증 상태를 연동해야 했습니다.",
          process: "스페이스 서버로부터 정보를 조회하는 ExternalProfileApiClient를 작성하고, HTTP와 STOMP 헤더 양쪽에서 JWT를 추출하는 JwtExtractor를 추가했습니다. 서버 간 통신 결과를 기반으로 DTO를 반환하도록 of 메서드를 작성했습니다.",
          role: "Author",
          result: "서버 간 HTTP 통신을 통해 실제 프로필 정보를 받아 메시지 응답에 반영하여 고정값을 성공적으로 제거했습니다."
        },
        {
          title: "FCM 기반 알림 서버 MVP 구현과 푸시 알림 구조 구성",
          situation: "채팅 메시지 발생 시 브라우저 Web Push나 FCM을 통해 사용자에게 알림을 보내는 기능이 필요했습니다.",
          target: "사용자 경험, 기능 확장성, 서버 분리",
          reason: "단순 채팅 서버 내부에서 알림까지 처리하면 책임이 비대해지므로 별도 알림 서버 분리가 필요했습니다.",
          process: "Kafka로 채팅 메시지를 consume하고 FCM API 형식에 맞춰 알림 payload를 전송하는 notification-server를 구현했습니다. 초기에는 하드코딩된 사용자에게 전송했으나 이후 Space 서버와 통신해 채널 멤버 전체에게 발송되도록 보완했습니다.",
          role: "Author",
          result: "Kafka 기반 알림 이벤트 소비와 FCM 푸시 전송 기반을 갖춘 알림 서버 분리 및 구축을 완료했습니다."
        },
        {
          title: "Docker Compose 기반 테스트 환경 분리와 통신 문제 해결",
          situation: "프로젝트가 여러 서버로 나뉘면서 로컬 테스트 환경 구성이 복잡해졌고 컨테이너 간 통신, CORS, 포트 충돌, DB 연결 문제가 빈번했습니다.",
          target: "개발 생산성, 안정성, 인프라",
          reason: "서버 전체를 띄워야 하는 경우와 특정 서버만 단독으로 테스트해야 하는 경우의 요구사항이 달랐습니다.",
          process: "chat-server 단독, history-server 단독, 통합 실행 환경 등 Docker Compose를 분리했습니다. 컨테이너 이름 기반 서버 간 통신 설정과 Mongo/Kafka 분리를 진행했고, 코드 리뷰 과정에서 다른 팀원의 Docker 이미지 경량화를 제안했습니다.",
          role: "Author / Reviewer",
          result: "환경 분리를 통해 로컬 실행 재현성을 높이고, 리뷰를 통해 상대 팀원의 이미지 크기를 2GB에서 662MB로 줄이는데 기여했습니다."
        }
      ]
    },
    {
      id: "facefriend",
      type: "Main Project",
      date: "2024.03 - 2024.06",
      title: "FaceFriend - 지능형 이미지 분석 커뮤니티",
      description: "Spring Boot 기반 소셜/채팅 서비스에서 WebSocket/STOMP 채팅 기능과 채팅 응답 구조 개선을 담당했습니다.",
      points: [
        "실시간 채팅 기능이 필요한 상황에서 ChatRoom, ChatRoomMember, ChatMessage 도메인과 Controller-Service-Repository 계층을 구성하고, WebSocket/STOMP 및 RedisSubscriber 기반 채팅 API 구현",
        "채팅방 입장 상태와 애플리케이션 접속 상태를 Redis domain으로 관리하고, 메시지 기록을 페이지네이션 및 특정 시간 이전 조회 방식으로 개선해 채팅 이력 조회 흐름 보강",
        "STOMP 예외가 HTTP 예외 흐름으로만 처리되어 프론트엔드가 Socket 메시지로 오류를 받지 못하는 문제를 발견하고, 예외 메시지를 WebSocket으로 전달한 뒤 서버에서도 exception을 유지하도록 개선",
        "WebSocket 응답을 JSON 형태로 표준화하고 모든 STOMP 응답에 method 필드를 추가해 프론트엔드가 채팅 이벤트들을 구분할 수 있도록 응답 구조 개선",
        "친밀도 기반 이미지 변화 기능이 채팅방 목록 응답에 반영되도록 ChatRoomService와 상태별 채팅방 DTO를 수정하고, ChatAop 파싱 오류 및 이미지 마스크 레벨 기준 변경 대응",
        "채팅 기능 확장 과정에서 남은 불필요 API 및 서비스 코드를 제거하고 leftroom 로직을 수정해 채팅 도메인의 유지보수성 개선"
      ],
      tags: ["Java", "Spring Boot", "Spring AOP", "AWS S3", "MySQL"],
      links: {
        github: "https://github.com/kookmin-sw/capstone-2024-18"
      },
      troubleshooting: [
        {
          title: "WebSocket/STOMP 기반 실시간 채팅 API 구현",
          situation: "사용자 간 채팅 요청, 수락/거절, 메시지 전송 및 채팅방 목록 조회가 필요했습니다.",
          target: "사용자 경험, 안정성, 기능 구현",
          reason: "단순 HTTP API만으로는 실시간 메시지 전달과 채팅 상태 반영이 어려웠습니다.",
          process: "WebSocket/STOMP 기반 채팅 API를 구현하고, ChatRoom, ChatRoomMember, ChatMessage 도메인과 계층 구조를 설계했습니다. STOMP 메시지 처리를 위해 Redis 설정과 RedisSubscriber를 추가하고 후속 리뷰에 맞춰 브로커와 DTO 구조를 리팩토링했습니다.",
          role: "Author",
          result: "실시간 채팅 기능 기반을 완벽하게 구현하고 도메인과 서비스 계층을 구성했습니다."
        },
        {
          title: "채팅방 입장 상태와 메시지 기록 페이지네이션 관리",
          situation: "사용자가 현재 어떤 채팅방에 있는지, 접속 중인지 관리해야 했으며, 한 번에 모든 메시지를 내리면 데이터가 커지는 문제가 있었습니다.",
          target: "사용자 경험, 성능, 안정성",
          reason: "채팅 기록과 접속 상태를 빠르게 처리하고 프론트엔드의 이전 메시지 조회 요구사항을 맞춰야 했습니다.",
          process: "ChatRoomInfo, SocketInfo Redis domain과 Repository를 추가해 상태를 관리하고, 메시지 기록을 페이지네이션 구조로 변경했습니다. 프론트에서 전달한 시간 이전의 메시지를 조회할 수 있도록 MessageListRequest를 추가했습니다.",
          role: "Author",
          result: "실시간 채팅뿐 아니라 채팅방 입장 상태 관리와 효율적인 채팅 이력 조회 흐름을 함께 보강했습니다."
        },
        {
          title: "STOMP 예외를 프론트엔드가 받을 수 있도록 WebSocket 응답 흐름 개선",
          situation: "STOMP 통신 중 예외가 발생하면 서버에서는 확인이 가능하나, 프론트엔드는 WebSocket 메시지로 오류 정보를 받지 못했습니다.",
          target: "안정성, 사용자 경험, 디버깅/개발 생산성",
          reason: "일반적인 예외 처리는 HTTP 응답으로 처리되기 때문에 STOMP 클라이언트가 오류를 즉시 전달받기 어려웠습니다.",
          process: "예외 발생 시 프론트로 오류 메시지를 먼저 STOMP로 전송하고, 이후 서버에서도 확인할 수 있도록 exception을 유지하는 방식으로 MessageService를 리팩토링했습니다.",
          role: "Author",
          result: "채팅 중 실패 상황을 프론트가 즉시 인지할 수 있게 하고, 서버 디버깅 흐름도 함께 보존했습니다."
        },
        {
          title: "WebSocket 응답을 JSON 형태와 method 필드 기반으로 표준화",
          situation: "채팅방 나가기, 요청 수락, 메시지 전송 등 여러 이벤트가 동일한 WebSocket 채널로 전달되면서 프론트엔드가 이벤트를 판별하기 어려웠습니다.",
          target: "프론트엔드 연동성, 유지보수성, 사용자 경험",
          reason: "전달되는 응답 형식이 단순 문자열이거나 규칙이 일정하지 않아 타입 구분이 필요했습니다.",
          process: "WebSocket response를 JSON 형태로 변경하고, 모든 STOMP 응답 DTO에 method 필드를 추가했습니다. 채팅방 나가기와 요청 수락 결과도 상대방이 WebSocket으로 받을 수 있도록 응답 구조를 수정했습니다.",
          role: "Author",
          result: "프론트엔드가 이벤트 타입을 명확히 구분하고 사용자 화면에 즉시 반영할 수 있는 표준 응답 구조를 만들었습니다."
        },
        {
          title: "채팅방 목록에서 친밀도 레벨에 맞는 상대방 이미지 응답 처리",
          situation: "채팅방 목록에서도 친밀도에 따라 변화하는 상대방 이미지를 보여줘야 했으나 응답에 레벨별 이미지가 반영되지 못했습니다.",
          target: "사용자 경험, API 응답 정확성",
          reason: "AOP 파라미터 파싱 오류 및 기존 응답 DTO의 한계가 있었습니다.",
          process: "채팅방 목록 응답에 현재 레벨에 맞는 이미지가 반영되도록 ChatRoomService와 DTO를 수정했습니다. ChatAop에서 JoinPoint 파라미터를 파싱하는 오류를 해결하고 이후 레벨 기준 변경에 맞춰 AOP 로직을 리팩토링했습니다.",
          role: "Author",
          result: "AOP 파싱 오류를 수정하고 친밀도 기반 이미지 응답 연동의 정확성을 개선했습니다."
        },
        {
          title: "채팅 API 불필요 코드 정리와 leftroom 로직 수정",
          situation: "채팅 기능이 여러 번 수정되면서 사용하지 않는 enter/exit API, ObjectMapper 코드, 불필요 조건문 등이 남게 되었습니다.",
          target: "유지보수성, 개발 생산성, 안정성",
          reason: "죽은 코드가 남아 있으면 프론트엔드 API 계약에 혼란을 주고 유지보수 비용을 증가시켰습니다.",
          process: "사용하지 않는 enter/exit API와 서비스 코드, RedisSubscriber의 불필요 코드를 모두 제거했습니다. 채팅방 나가기(leftroom) 로직을 수정해 실제 사용 흐름을 중심으로 정리했습니다.",
          role: "Author",
          result: "불필요 코드를 제거하고 채팅방 나가기 흐름을 정리하여 유지보수성을 크게 높였습니다."
        }
      ]
    },
    {
      id: "oneHabit ",
      type: "Hackathon",
      date: "2024.03.13 - 2024.03.23",
      title: "OneHabit  - 습관 형성 챌린지 서비스",
      description: "사용자가 습관을 '나무'로 생성하고, 인증글을 통해 습관을 지속 관리하며 공유할 수 있는 Spring Boot 기반 백엔드 서비스입니다.",
      points: [
        "핵심 도메인인 'Tree' 기능을 설계하고 Controller-Service-Repository-DTO 계층 분리 구현",
        "Spring Scheduler를 활용한 날짜 기반 인증 상태 갱신 및 연속 인증 기간 계산 로직 구축",
        "로그인 응답 구조 확장을 통한 피드백 정보 및 Tree 상태 실시간 연동",
        "Tree Update API 및 유저별 전체 인증글 통계 API 개발로 서비스 확장성 확보"
      ],
      tags: ["Java", "Spring Boot", "Spring Data JPA", "Spring Scheduler", "MySQL", "Redis"],
      links: {
        github: "https://github.com/9oormthon-univ/2024_BEOTKKOTTHON_TEAM_19_BE"
      },
      troubleshooting: [
        {
          title: "습관 도메인 기반 Tree CRUD와 계층형 아키텍처 구축",
          situation: "서비스의 핵심인 '습관 나무' 생성 및 관리 흐름이 필요했으나, 초기 설계에서 계층 간 책임 분리가 미흡했습니다.",
          target: "유지보수성 및 기능 기반 설계",
          reason: "도메인 모델과 API 응답 형식이 혼재되어 있어, 향후 인증글 및 피드백 기능 확장에 제약이 있었습니다.",
          process: "Tree 도메인을 중심으로 Controller-Service-Repository-DTO 계층을 엄격히 분리했습니다. 특히 Response 생성 책임을 생성자로 옮기고, 어노테이션 기반 인증 사용자 주입 방식을 도입하여 비즈니스 로직의 순수성을 높였습니다.",
          role: "Author",
          result: "도메인 기반 기능 확장의 기반을 마련하여, 이후 복잡한 인증 및 스케줄링 로직이 안정적으로 결합될 수 있는 구조를 확보했습니다."
        },
        {
          title: "하루 1회 인증 및 연속 인증 기간 관리 로직 설계",
          situation: "단순 인증글 개수만 집계할 경우, 하루에 여러 번 인증했을 때 연속 인증 기간이 중복 계산되는 데이터 정합성 이슈가 있었습니다.",
          target: "도메인 정합성 및 사용자 경험",
          reason: "기존 날짜 필드만으로는 '하루 1회 제한'이라는 비즈니스 규칙과 '연속성' 상태를 표현하기에 부족했습니다.",
          process: "Tree 도메인에 `certification`(당일 인증 여부), `continuousperiod`(연속 인증일) 필드를 도입하고, Spring Scheduler를 통해 날짜별 상태를 자동 갱신하는 흐름을 설계했습니다. 또한 나무가 없는 경우의 예외 처리를 보강했습니다.",
          role: "Author",
          result: "사용자가 인증글을 여러 번 써도 도메인 상태는 일관되게 유지되도록 보장했으며, 데이터 기반의 정확한 습관 지속성 지표를 제공하게 되었습니다."
        },
        {
          title: "실시간 상태 갱신 스케줄러 및 응답 구조 최적화",
          situation: "나무의 마감(Deadline)이나 고사(Dead) 상태가 실시간으로 반영되지 않아, 사용자에게 잘못된 상태 정보가 전달될 위험이 있었습니다.",
          target: "데이터 일관성 및 안정성",
          reason: "상태 변경 로직이 수동 요청에만 의존할 경우, 시간 경과에 따른 자동 상태 전이를 보장하기 어려웠습니다.",
          process: "Spring Scheduler를 등록하여 주기적으로 Tree의 상태를 체크하고 갱신하도록 구현했습니다. 로그인 시 피드백 정보와 현재 Tree 상태를 하나의 응답에 포함시켜 클라이언트와의 데이터 동기화 횟수를 최적화했습니다.",
          role: "Author",
          result: "시간 기반 도메인 상태 관리의 자동화를 통해 데이터 신뢰도를 높였으며, 서비스 전반의 응답 흐름을 안정화했습니다."
        },
        {
          title: "사용자 활동 데이터 집계 및 API 확장",
          situation: "사용자의 습관 수정 요구사항과 전체 인증 활동에 대한 통계 정보가 화면에 노출되어야 하는 요구사항이 발생했습니다.",
          target: "API 확장성 및 사용자 경험",
          reason: "기존 API는 단일 Tree 조회에 집중되어 있어, 도메인 간 연관 데이터(TreePost)를 통합적으로 집계하는 기능이 부재했습니다.",
          process: "Tree Update API를 추가하고, Repository 수준에서 유저의 모든 인증글을 집계하는 쿼리를 작성했습니다. 이를 통해 Tree와 TreePost 도메인 간의 조회 흐름을 연결하는 Service 계층을 보강했습니다.",
          role: "Author",
          result: "사용자의 활동 통계를 시각화할 수 있는 API 기반을 제공하여 서비스의 활용도를 높였으며, 유연한 정보 수정 기능을 확보했습니다."
        },
        {
          title: "코드 리뷰를 통한 협업 및 품질 관리 참여",
          situation: "해커톤의 촉박한 일정 속에서 다수의 PR이 발생하며 코드의 일관성과 안정성이 저하될 우려가 있었습니다.",
          target: "협업 및 유지보수성",
          reason: "빠른 기능 구현에만 집중할 경우, 공통 인증 처리나 API 명세의 파편화가 발생하기 쉬운 환경이었습니다.",
          process: "전체 29개의 PR 중 20회 이상 리뷰어로 참여하여 API 명세 및 백엔드 흐름을 검토했습니다. 특히 인증 사용자 처리 방식과 계층 간 책임 분리에 대한 피드백을 주고받으며 코드 품질을 상호 보완했습니다.",
          role: "Reviewer / Author",
          result: "팀 내 기술적 의사결정 과정에 기여하며 개발 기간 내에 안정적인 백엔드 시스템을 완수하고, 유지보수가 용이한 협업 문화를 실천했습니다."
        }
      ]
    },
    {
      id: "relanz",
      type: "Django Project",
      date: "2023.06 - 2023.07",
      title: "Relanz - 스트레스 관리 및 챌린지 플랫폼",
      description: "사용자의 스트레스 설문 결과를 분석하여 맞춤형 리포트와 콘텐츠를 제공하고, 습관 개선을 위한 챌린지 참여를 지원하는 Django 기반 웹 서비스입니다.",
      points: [
        "회원가입 과정의 사용자 경험 개선을 위한 이메일 중복 확인 및 인증 데코레이터 구현",
        "Session 의존 방식을 탈피한 함수 기반 데이터 조회 리팩토링으로 홈 화면 데이터 정합성 강화",
        "비밀번호 재설정 및 계정 관리 UI의 반응형 최적화와 입력 피드백 시스템 구축",
        "챌린지 참여 전용 UI 및 연동 흐름을 설계하여 서비스 핵심 기능의 완성도 제고"
      ],
      tags: ["Python", "Django", "JavaScript", "HTML/CSS", "SQLite"],
      links: {
        github: "https://github.com/CalmCrews/Relanz"
      },
      troubleshooting: [
        {
          title: "회원가입 과정의 이메일 중복 확인 및 인증 흐름 보강",
          situation: "사용자가 이미 등록된 이메일을 입력했을 때 가입 요청 이후에야 실패를 알 수 있어 즉각적인 피드백이 부족했습니다.",
          target: "사용자 경험 및 안정성",
          reason: "프론트엔드와 백엔드 간의 중복 확인 연동이 누락되어 가입 실패 시점이 늦어지는 제약이 있었습니다.",
          process: "서버 측에 이메일 중복 확인 View 함수와 이메일 인증 Decorator를 추가했습니다. Fetch API를 연동하여 가입 화면에서 실시간으로 중복 여부를 시각화하고, 프로필 로딩 오류를 함께 수정하여 데이터 흐름을 안정화했습니다.",
          role: "Author",
          result: "가입 과정의 입력 검증을 강화하여 불필요한 서버 요청을 줄이고, 사용자 정보 조회 흐름의 신뢰도를 높였습니다."
        },
        {
          title: "메인 홈 화면의 설문 리포트 통계 연결 방식 개선",
          situation: "홈 화면에서 사용자의 설문 결과 리포트가 세션 상태나 접근 경로에 따라 간헐적으로 누락되는 이슈가 발생했습니다.",
          target: "데이터 정합성 및 유지보수성",
          reason: "데이터 전달이 Session에 과도하게 의존하고 있어, 상태 변화에 유연하게 대응하지 못하는 구조적 한계가 있었습니다.",
          process: "Session 의존 방식을 제거하고 필요한 데이터를 함수로 직접 호출하여 전달하는 방식으로 리팩토링했습니다. 또한 스트레스 취약도를 평균 대비 정규화하여 사용자에게 더 직관적인 문구로 제공하도록 로직을 개선했습니다.",
          role: "Author",
          result: "홈 화면 데이터 전달 흐름을 명확히 하여 누락 현상을 해결했으며, 사용자 맞춤형 리포트의 가독성을 향상시켰습니다."
        },
        {
          title: "로그인·회원가입·비밀번호 재설정 화면의 사용성 개선",
          situation: "초기 계정 관련 화면들이 모바일 환경에서 레이아웃이 깨지고, 비밀번호 가시성 등 입력 피드백이 부족했습니다.",
          target: "반응형 UI 및 사용자 경험",
          reason: "다양한 디바이스 환경을 고려한 미디어 쿼리 및 상태 표시용 UI 컴포넌트가 부족했습니다.",
          process: "모바일 레이아웃 오류를 수정하고, 비밀번호 표시/숨김 아이콘과 입력 검증 상태를 시각화하는 JS/CSS를 보강했습니다. 비밀번호 재설정 전용 스타일을 구축하여 전체 계정 복구 흐름을 정돈했습니다.",
          role: "Author",
          result: "서비스 진입점인 계정 관리 페이지의 완성도를 높여 모바일 사용자 이탈 방지 및 사용성 제고에 기여했습니다."
        },
        {
          title: "챌린지 참여 화면 구현 및 화면 연결 흐름 보강",
          situation: "챌린지 목록에서 실제 참여로 이어지는 사용자 흐름과 전용 UI가 미비하여 기능 활용도가 낮았습니다.",
          target: "사용자 경험 및 기능 확장",
          reason: "챌린지 도메인의 상세 페이지와 참여 로직 간의 View 연결 및 템플릿 구조가 확립되지 않은 상태였습니다.",
          process: "참여 신청 전용 템플릿(participate.html)과 스타일을 신규 구축하고, Challenge View 레벨에서 목록과 상세 화면을 유기적으로 연결했습니다.",
          role: "Author",
          result: "사용자가 챌린지 정보를 확인하고 참여하기까지의 전환 과정을 명확히 하여 서비스 핵심 기능의 흐름을 완성했습니다."
        },
        {
          title: "설문/콘텐츠 화면 오류 수정과 Migration 충돌 정리",
          situation: "설문 데이터 바인딩 과정에서 JS 오류로 데이터가 표시되지 않거나 DB 스키마 충돌로 개발 환경 배포에 지장이 있었습니다.",
          target: "안정성 및 개발 생산성",
          reason: "서버 측 태그 데이터와 프론트엔드 표시 로직 간의 규격 불일치 및 다수의 Migration 파일 중복이 원인이었습니다.",
          process: "Tag View와 Content JS의 데이터 규격을 일치시키고, Migration Merge 파일을 생성하여 DB 히스토리의 정합성을 확보했습니다.",
          role: "Author",
          result: "콘텐츠 화면의 표시 오류를 근본적으로 해결하고, 개발 및 배포 환경의 데이터베이스 일관성을 확보했습니다."
        }
      ]
    }
  ],
  learning: [
    {
      type: "Personal Project",
      date: "2026.03",
      title: "Java GC Puzzle",
      description: "바이브 코딩 기반으로 Java GC를 퍼즐 게임 형태로 학습할 수 있는 웹 사이트 제작",
      points: [
        "Java GC 개념을 이해하기 위해 인터랙티브 학습 사이트를 직접 제작하며, 자바 메모리 구조와 가비지 컬렉션 동작 원리를 탐구했습니다.",
        "학습용 웹 애플리케이션을 구현하며 개념 이해를 위한 도구를 직접 만들고 실험하는 방식으로 학습을 진행했습니다.",
        "자바 메모리 구조, 객체 생명주기, GC 동작 흐름을 시각적으로 정리하며 추상적인 개념을 구현과 연결해 이해하는 경험을 쌓았습니다.",
        "단순 이론 학습에 그치지 않고, 학습용 프로토타입을 제작해 개념을 검증하고 구조화하는 방식으로 CS 지식을 학습했습니다."
      ],
      tags: ["Java GC", "Antigravity", "Web", "1인 개발"],
      links: {
        website: "http://java-memory-quiz.s3-website.ap-northeast-2.amazonaws.com/"
      }
    },
    {
      type: "University Project",
      date: "2024.03 - 2024.06",
      title: "KiKi Kiosk - 객체지향 기반 키오스크 시스템",
      description: "키오스크 주문에 어려움을 느끼는 정보 취약계층(ex.노년층)을 위해 주문 단계를 하나씩 나눠 점원과 대화하듯 주문할 수 있는 서비스로, 객체지향 설계 원칙을 준수하여 확장성과 유지보수성이 높은 백엔드 API를 개발했습니다.",
      points: [
        "객체지향분석 및 설계 강의를 통해 학습한 내용을 바탕으로 도메인 모델 설계부터 시퀀스/클래스 다이어그램까지 전체 소프트웨어 설계 프로세스를 실습했습니다.",
        "Use Case / 시퀀스 / 시스템 시퀀스 / 클래스 다이어그램 작성을 통해 기능 요구사항 분석 및 시스템 구조를 설계했습니다.",
        "관리자 로그인/로그아웃 기능을 구현하고, GRASP 원칙 및 디자인 패턴(Controller, Creator, Expert, Singleton, DTO 등)을 적용하여 비즈니스 로직 분리 및 유지보수 용이성을 향상시켰습니다.",
        "관심사 분리를 위한 Controller-Service-Repository 레이어 아키텍처를 적용했습니다.",
        "WebMvcConfigurer를 통한 글로벌 CORS 정책 설정 및 @RestControllerAdvice를 통한 애플리케이션 전역 예외 처리 규격 통일을 구현하여 프론트엔드-백엔드 연동 안정성을 확보했습니다.",
        "빌드 및 배포 설정(yml) 최적화로 개발 환경과 운영 환경 분리 관리를 적용했습니다."
      ],
      tags: ["OOP", "Design Pattern", "Java", "Spring Boot", "MySQL", "CORS"],
      links: {
        github: "https://github.com/imjanghyeok/kiki_kiosk"
      }
    }
  ],
  activities: [
    {
      id: "opensource_contribution",
      title: "오픈소스 기여 활동 | 오픈소스 기여 모임 10기",
      date: "2026.01 - 2026.02",
      description: "오픈소스 기여 모임 10기에 참여하여 실제 오픈소스 프로젝트의 협업 방식과 기여 프로세스를 경험하고, Spring Session 공식 문서 업데이트 PR을 제출했습니다.",
      details: [
        "GitHub 기반 오픈소스 협업 프로세스 및 PR(Pull Request) workflow 경험",
        "AI 기반 개발 도구(ChatGPT, GitHub Copilot 등)를 활용한 코드 분석 및 이슈 해결 시도",
        "실제 OSS 프로젝트 코드 리딩 및 기능 개선 PR 제출 경험",
        "코드 리뷰 피드백 기반 수정 및 협업 커뮤니케이션 경험",
        "[Spring Session 공식 문서 내 MongoDB, Hazelcast 익스텐션 정보 업데이트(PR 기여)](https://github.com/spring-projects/spring-session/pull/3630)",
        "공식 이슈(gh-3604)를 연관하여 오픈소스 문서 정확성 개선 참여"
      ],
      story: `
        <h3>오픈소스 기여 활동 (오픈소스 기여 모임 10기)</h3>
        <br>
        <p>오픈소스 기여 모임 활동을 통해 실제 오픈소스 프로젝트의 협업 방식과 기여 프로세스를 경험했습니다. 단순 코드 작성보다 프로젝트 구조를 이해하고, 기존 코드 스타일 및 유지보수 방향에 맞춰 개선점을 찾는 과정에 집중했습니다.</p>
        <br>
        <p>특히 GitHub 기반 협업 환경에서 이슈 탐색, 로컬 개발 환경 세팅, 코드 리딩, 브랜치 전략, Pull Request 작성 및 리뷰 대응 과정을 직접 경험했습니다.</p>
        <br>
        <p>또한 ChatGPT, GitHub Copilot 등의 AI 기반 개발 도구를 활용하여 코드베이스 구조를 빠르게 파악하고, 관련 문서 및 에러 원인을 분석하며 문제 해결 방향을 도출했습니다. 이를 통해 단순 구현뿐 아니라 AI를 활용한 개발 생산성 향상 경험도 함께 쌓을 수 있었습니다.</p>
        <br>
        <p>프로젝트 기여 과정에서는 기능 개선 및 수정 사항에 대한 PR(Pull Request)을 제출하였고, Maintainer의 리뷰 피드백을 반영하며 협업 커뮤니케이션 경험을 쌓았습니다.</p>
        <br>
        <h4>Spring Session 기여 중 트러블 슈팅</h4>
        <p><strong>상황:</strong> Spring Session 공식 저장소에 PR을 제출하는 과정에서, CLA 서명 누락 및 커밋 메시지 규약(Conventions)을 준수하지 않아 CI 빌드에 실패했습니다.</p>
        <p><strong>해결:</strong> Spring 프로젝트의 기여 가이드라인(CONTRIBUTING.adoc)을 다시 숙지하고, CLA 서명을 완료한 뒤 커밋 메시지를 'gh-3604'와 같이 이슈 번호를 포함하는 올바른 형식으로 리베이스(Rebase)했습니다.</p>
        <p><strong>결과:</strong> 글로벌 표준에 맞는 협업 프로세스를 경험하고, 성공적으로 PR이 Merge되어 오픈소스 기여를 완수했습니다.</p>
      `
    },
    {
      id: "woowacourse",
      title: "우아한테크코스 6기 프리코스",
      date: "2024.10 - 2024.11",
      description: "Java 기반 콘솔 애플리케이션 3개를 구현하며 요구사항 분석, 객체지향 설계, 테스트, 코드 리뷰를 반복 학습했습니다.",
      details: [
        "자바 기반의 우아한테크코스 6기 프리코스 참여",
        "문자열 덧셈 계산기: 파싱, 검증, 계산 책임을 개별 객체로 분리하여 입력 처리 흐름 명확화",
        "자동차 경주: 랜덤 숫자 생성 로직을 전략 패턴(IntGeneratorStrategy)으로 분리하여 테스트 가능한 구조로 개선",
        "로또 미션: 도메인 객체(Issuer, Checker, Analyst 등)를 세분화하여 비즈니스 로직 분산 방지",
        "1~3주차 과제 PR 리뷰 참여 (reviewer 32회, commenter 59회)로 DTO, MVC 역할, 인터페이스 추상화 관련 토론 경험",
        "4주차 과제 private 진행 및 미션 수행"
      ],
      story: `
        <h3>우아한테크코스 6기 프리코스</h3>
        <br>
        <p>우아한테크코스 프리코스에서 Java 기반 콘솔 애플리케이션 3개를 구현하며 요구사항 분석, 객체지향 설계, 테스트, 코드 리뷰를 반복했습니다.</p>
        <br>
        <p><strong>[문자열 덧셈 계산기]</strong> 구분자 파싱, 숫자 파싱, 입력 검증, 계산 책임을 SeparatorParser, NumberParser, Validator, Calculator로 분리해 입력 처리 흐름을 명확히 했습니다.</p>
        <br>
        <p><strong>[자동차 경주]</strong> 랜덤 값에 의존하는 이동 로직을 테스트 가능하게 만들기 위해 IntGeneratorStrategy를 도입하고, 자동차·자동차 목록·경주 상태를 각각 Car, Cars, Racing 객체로 분리했습니다.</p>
        <br>
        <p><strong>[로또 미션]</strong> 로또 발행, 당첨 결과 계산, 수익률 계산을 Issuer, Checker, LottoResults, Analyst 등 도메인 객체로 나누어 Controller에 비즈니스 로직이 집중되지 않도록 설계했습니다.</p>
        <br>
        <p><strong>[코드 리뷰 활동]</strong> 1~3주차 미션 과정에서 다른 참가자들의 PR에 reviewer 32회, commenter 59회로 참여했습니다. DTO의 책임, View/Controller의 역할 분리, 전략 패턴의 필요성, 인터페이스 추상화, 네이밍, 테스트 가능성에 대해 깊이 있는 리뷰를 주고받으며 설계 관점을 넓혔습니다.</p>
      `
    },
    {
      id: "boostcamp10",
      title: "네이버 부스트캠프 웹·모바일 10기 챌린지 및 멤버십 수료",
      date: "2025.07 - 2026.02",
      description: "매주 새로운 팀원들과 협업하며 CS 기초 지식을 학습하고, 웹 애플리케이션의 요구사항 분석부터 배포까지 전 과정을 경험하며 개발 흐름 전반에 대한 이해를 넓혔습니다.",
      details: [
        "네이버 부스트캠프 챌린지 과정 수료 (2025.07 - 2025.08)",
        "네이버 부스트캠프 멤버십 과정 수료 (2025.08 - 2026.02)",
        "하루 단위 미션을 수행하며 우선순위 설정, 일정 관리, 학습과 구현의 균형을 맞추는 자기주도적 개발 사이클 체득",
        "프론트엔드와 백엔드를 모두 다루며 상태 관리, API 연동, 인증, 예외 처리, 데이터 모델링 등 핵심 개발 역량 강화",
        "성능, 동시성, 데이터 정합성, 운영 환경 구성을 고민하며 안정적으로 동작하는 서비스를 설계하는 관점 확대",
        "문서화, 테스트, 코드 리뷰, 리팩토링을 반복하며 협업 기반의 개발 습관 형성"
      ],
      story: `
        <h3>네이버 부스트캠프 10기</h3>
        <br>
        <p>부스트캠프 웹・모바일 10기 챌린지 과정에 참여해, 매일 제한된 시간 안에 주어지는 미션을 분석·구현·회고하는 방식으로 문제 해결 역량을 훈련했습니다.</p>
        <br>
        <p>미션 세부 내용은 공개할 수 없지만, 핵심은 촉박한 시간 내 우선순위를 세워 해결책을 만들고, 동료 피드백을 통해 접근 방식과 코드 품질을 반복적으로 개선하는 과정이었습니다.</p>
        <br>
        <p>이 경험을 통해 불확실한 조건에서도 빠르게 문제를 구조화하고, 검증과 리팩토링까지 포함한 문제 해결 역량을 키울 수 있었습니다.</p>
      `
    },
    {
      id: "smilegate_camp",
      title: "Smilegate Online Dev Camp",
      date: "2025.01 - 2025.03",
      description: "SmileTogether 프로젝트의 백엔드 팀장이자 리드 개발자로서 전체 시스템 방향성 설정과 아키텍처 설계를 이끌었습니다.",
      details: [],
      story: `
        <h3>Project lead - Backend</h3>
        <br>
        <p>‘SmileTogether’ 프로젝트는 단순한 개발을 넘어, 팀을 이끄는 리더로서의 첫 경험이었습니다.</p>
        <br>
        <p>오프라인 데브캠프에 탈락한 아쉬움 속에서, 온라인 프로젝트 참여 기회를 통해 저는 팀장 겸 백엔드 개발자로 새롭게 도전하게 되었습니다.</p>
        <br>
        <p>프로젝트 초기에 가장 먼저 주력한 일은 팀 전체의 방향을 잡는 일이었습니다. 단순한 채팅 기능 구현이 아닌, 대규모 트래픽에도 버틸 수 있는 실시간 통신 시스템이라는 목표를 세우고, 이를 모든 팀원이 이해하고 함께 도전할 수 있도록 비전을 공유했습니다.</p>
      `
    },
    {
      id: "dan25",
      title: "네이버 DAN 25 컨퍼런스 참여",
      date: "2025.11.07",
      description: "데이터와 지표를 바탕으로 문제를 정의하고 개선 방향을 설계하는 실무적 사고방식을 배웠습니다.",
      details: [
        "현재 성과를 진단한 뒤 다음 목표를 설정하는 회고와 성장 방향 수립의 중요성 체감",
        "기술을 사용자 경험과 연결해 바라보는 관점 확대"
      ],
      links: { blog: "https://dlaljh.tistory.com/4" }
    },
    {
      id: "likelion",
      title: "웹 개발 및 IT 창업 동아리 [멋쟁이사자처럼] 국민대",
      date: "2023.03 - 2025",
      description: "동아리 대표(2024) 및 중앙운영단으로 활동하며 세션 커리큘럼 총괄, 해커톤 기획 및 운영, 백엔드 세션 진행 등을 수행했습니다.",
      details: [
        "국민대 멋쟁이사자처럼 교내 해커톤 및 전국 멋쟁이사자처럼 중앙 해커톤 참여 (2023)",
        "40여 명 규모의 동아리인 국민대 멋쟁이사자처럼 대표 역임 (2024)",
        "동아리 연합 해커톤 (트렌디톤, 4호선톤) 중앙운영단 참여 및 운영 보조 (2024)",
        "백엔드 세션 커리큘럼 보완 및 Django, AWS 배포 세션 진행 (2024-2025)",
        "[Django user, admin 세션 진행 영상](https://www.youtube.com/watch?v=rW0X2DvXyL4)",
        "[MTV 패턴 세션 자료](https://drive.google.com/file/d/1DXrul0RN32W26vuRbG3y9HVz53IAMeMu/view?usp=drive_link)",
        "[AWS 배포 세션 자료](https://drive.google.com/file/d/1CGhMX5EuxRJy8iDvh5osVBsf97e7-0kq/view?usp=drive_link)"
      ],
      story: `
        <h3>멋쟁이사자처럼 국민대 대표 및 운영</h3>
        <br>
        <p>2023년 비전공자로 개발을 시작하기 위해 멋쟁이사자처럼이라는 동아리에 들어갔습니다. 신입 부원으로서 1학기 동안 주 2회, 회당 2시간 이상의 세션을 들으면서 파이썬 기반의 Django 프레임워크에 대해 배웠습니다. 이런 학습 활동을 바탕으로 교내 해커톤과 중앙 해커톤 등 두 번의 해커톤에 참가하였습니다.</p>
        <br>
        <p>동아리에 대한 적극적인 활동을 인정받아 2024년 동아리 대표로서 활동하게 되었습니다. 동아리 부원은 총 40여 명 규모였고, 신입 부원 당시 세션을 들을 때 아쉬웠던 REST API에 대한 세션을 첨가하여 세션 커리큘럼을 보완하였습니다.</p>
        <br>
        <p>또한 1월에는 멋쟁이사자처럼 운영진톤의 중앙 운영단으로 참가하였고, 이후 중앙 해커톤 참여, 교내 해커톤 기획 및 운영 등을 하였습니다. 대표로서 마지막으로 11월에 동국대 주최의 연합 해커톤인 4호선톤의 중앙 운영단으로 참여하여 해커톤 운영을 도왔습니다.</p>
        <br>
        <p>비전공자로 시작해 막막했던 개발자 길에서 다양한 사람들과 네트워크를 형성하고, 개발을 잘하는 사람, 개발을 처음 접하는 사람, 협업을 잘 하는 사람 등 여러 사람들을 만나고 배울 수 있었던 뜻깊은 활동이었습니다.</p>
      `
    },
    {
      id: "goormthon",
      title: "Goormthon Univ 2기 벚꽃톤",
      date: "2024.02 - 2024.08",
      description: "약 300명 규모의 구름톤 유니브 주최 벚꽃톤에 참여하여 기획부터 백엔드 개발까지 협업 기반 프로젝트를 경험했습니다.",
      details: [
        "습관 형성 서비스 OneHabit의 기획 및 백엔드 개발 담당"
      ],
      story: `
        <h3>벚꽃톤 해커톤 참여 경험</h3>
        <br>
        <p>Goormthon Univ 2기 활동을 통해 약 300명이 참여한 벚꽃톤 해커톤에 참가하며 협업 기반 프로젝트 경험을 쌓았습니다. 이 과정에서 저는 습관 형성에 어려움을 겪는 대학생과 직장인을 위한 서비스 OneHabit의 기획과 백엔드 개발을 맡았습니다.</p>
        <br>
        <p>예상보다 빠듯한 일정과 역할 분담의 미비뿐만 아니라, 기획자가 제안한 아이디어가 외부 서비스의 표절이라는 사실이 밝혀지는 돌발 상황도 있었습니다.</p>
        <br>
        <p>이 경험을 통해 단순한 개발을 넘어, 기획과 기술이 연결되는 지점에서의 실행력과 문제 해결력, 그리고 진정한 협업의 본질을 깊이 배우는 계기가 되었습니다.</p>
      `
    }
  ],
  papers: [
    {
      title: "애플리케이션 내 토큰 관리를 통해 사용자 개인정보 보안",
      publisher: "한국정보과학회 학술발표논문집, 제주",
      date: "2024.06.26",
      authors: "김유림, 임장혁, 김우림, 서의정, 신은영, 최유찬",
      details: [
        "모바일 환경의 앱 애플리케이션 내에서 JWT 토큰 관리를 통한 사용자 개인정보에 대한 보안",
        "재난 애플리케이션이라는 특징을 고려한 JWT 토큰 발급 및 재발급 과정 저술",
        "토큰 기반 시스템의 백엔드 서버 구현"
      ]
    }
  ],
  awards: [
    {
      title: "멋쟁이사자처럼 X 국민대 해커톤 금상 수상",
      date: "2023"
    },
    {
      title: "2024 한국컴퓨터종합학술대회 학부생/주니어 논문경진대회 장려상",
      date: "2024"
    }
  ]
};
