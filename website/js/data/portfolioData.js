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
      description: "Slack 유사 기능을 MSA 아키텍처로 구현한 실시간 협업 플랫폼입니다.",
      points: [
        "WebSocket(STOMP) + Kafka 기반 실시간 채팅 및 비동기 메시지 처리 구현",
        "Kafka Offset Lag 체크를 통한 채팅 메시정 정합성 보장 로직(KafkaLagChecker) 설계",
        "Firebase FCM 기반 Web Push 알림 서버 구축 및 메시지 연동",
        "Spring Cloud(Config, Discovery, Gateway) 기반 MSA 초기 세팅 및 Docker Compose 환경 구축"
      ],
      tags: ["Spring Boot", "Kafka", "MongoDB", "FCM", "MSA"],
      links: {
        github: "https://github.com/sgdevcamp2025/smiletogether"
      },
      troubleshooting: [
        {
          title: "분산 시스템 메시지 정합성",
          situation: "MSA 환경에서 Kafka를 이용한 비동기 메시지 전달 시, 컨슈머의 처리 지연이나 일시적 오류로 인해 메시지가 누락되거나 정합성이 깨질 수 있는 위험이 있었습니다.",
          target: "데이터 안정성 및 시스템 신뢰도",
          reason: "메시지 브로커와 데이터베이스 간의 작업이 원자적으로 처리되지 않는 분산 시스템의 특성상, 오프셋 관리가 정확하지 않으면 메시지 유실 가능성이 존재했습니다.",
          process: "Kafka Offset Lag를 폴링 방식으로 체크하는 'KafkaLagChecker' 유틸리티를 설계하고 구현했습니다. 컨슈머 그룹의 오프셋 상태를 주기적으로 모니터링하여 임계치를 넘어서는 지연을 감지하도록 했습니다.",
          role: "Author",
          result: "메시지 누락 가능성을 조기에 감지할 수 있는 방어 기제를 마련하여 시스템의 정합성을 강화하고 운영 안정성을 높였습니다."
        }
      ]
    },
    {
      id: "facefriend",
      type: "Main Project",
      date: "2024.03 - 2024.06",
      title: "FaceFriend - 지능형 이미지 분석 커뮤니티",
      description: "사용자 업로드 이미지의 프라이버시 보호를 위해 자동 마스킹 및 분석 기능을 제공하는 서비스입니다.",
      points: [
        "AOP(Aspect Oriented Programming)를 활용한 이미지 마스크 레벨 검증 로직 구현",
        "S3 기반의 안정적인 미디어 스토리지 및 정적 자원 관리 아키텍처 설계",
        "분석 서비스 Deserializer 및 커스텀 예외 처리를 통한 서버 안정성 강화"
      ],
      tags: ["Java", "Spring Boot", "Spring AOP", "AWS S3", "MySQL"],
      links: {
        github: "https://github.com/kookmin-sw/capstone-2024-18"
      }
    },
    {
      id: "spring-session",
      type: "Open Source",
      date: "2024.05",
      title: "Spring Session Open Source Contribution",
      description: "Spring 프로젝트의 생태계 확장을 위해 커뮤니티 익스텐션 정보를 문서화하여 기여했습니다.",
      points: [
        "Spring Session 공식 문서 내 MongoDB, Hazelcast 익스텐션 정보 업데이트(PR 기여)",
        "공식 이슈(gh-3604)를 연관하여 오픈소스 문서 정확성 개선 참여",
        "글로벌 오픈소스 프로젝트의 기여 프로세스(PR, CLA 등) 경험"
      ],
      tags: ["Open Source", "Documentation", "Asciidoc", "Git"],
      links: {
        github: "https://github.com/spring-projects/spring-session/pull/3630"
      }
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
      id: "kiki-kiosk",
      type: "OOP Project",
      date: "2024.01",
      title: "Kiki Kiosk - 객체지향 기반 키오스크 시스템",
      description: "객체지향 설계 원칙을 준수하여 확장성과 유지보수성이 높은 키오스크 백엔드 API를 개발한 프로젝트입니다.",
      points: [
        "관심사 분리를 위한 Controller-Service-Repository 레이어 아키텍처 적용",
        "CORS 설정 및 공통 예외 처리를 통한 프론트엔드-백엔드 연동 안정성 확보",
        "빌드 및 배포 설정(yml) 최적화로 개발 환경과 운영 환경 분리 관리"
      ],
      tags: ["Java", "Spring Boot", "OOP", "MySQL", "CORS"],
      links: {
        github: "https://github.com/godeka/kiki_kiosk"
      }
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
  ]
};
