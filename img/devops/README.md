# DevOps Images Directory

이 디렉토리는 DevOps 테마 홈페이지의 이미지 파일을 저장하는 공간입니다.

## 필요한 이미지

필요에 따라 아래 이미지들을 추가할 수 있습니다:

### Hero Section
- `hero-bg.jpg` - 히어로 섹션 배경 이미지 (1920x1080 권장)

### Solutions Section
- `devops-pipeline.svg` - DevOps 파이프라인 일러스트
- `kubernetes-cluster.svg` - Kubernetes 클러스터 다이어그램
- `cloud-migration.svg` - 클라우드 마이그레이션 일러스트

### Services Section
- `ci-cd-icon.svg` - CI/CD 아이콘
- `docker-icon.svg` - Docker 아이콘
- `cloud-icon.svg` - 클라우드 아이콘

## 현재 상태

현재는 CSS 그라디언트와 Font Awesome 아이콘으로 모든 비주얼을 처리하고 있어 별도 이미지 없이도 작동합니다.

실제 이미지를 추가하려면:
1. 이 디렉토리에 이미지 파일 업로드
2. `index.html`에서 해당 `<img>` 태그의 `src` 속성 업데이트
3. `onerror` 속성 제거 (현재는 이미지 로드 실패시 숨김 처리)
