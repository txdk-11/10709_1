// 페이지 로드 시 환영 메시지 표시
window.onload = function () {
    alert("SentinelGuard에 오신 것을 환영합니다! 디지털 자산을 안전하게 보호하세요.");
};

// 주요 기능을 동적으로 표시
const features = [
    "실시간 위협 탐지 및 분석",
    "자동화된 위협 대응 및 격리",
    "직관적인 보안 현황 대시보드",
    "사용자 설정 및 관리"
];

const featureList = document.getElementById("feature-list");

if (featureList) {
    features.forEach((feature) => {
        const listItem = document.createElement("li");
        listItem.textContent = feature;
        featureList.appendChild(listItem);
    });
}

// 사용자 페르소나를 동적으로 표시
const personas = [
    {
        name: "중소기업 IT 관리자 (김대리)",
        description: "간편하게 설정하고 관리할 수 있으며, 실제 위협에 효과적으로 대응하는 솔루션을 원합니다."
    },
    {
        name: "개인 사용자 (박시민)",
        description: "복잡한 설정 없이 자동으로 보안 위협으로부터 보호받고 싶어 합니다."
    },
    {
        name: "보안 컨설턴트 (이전문)",
        description: "탐지 및 분석 데이터를 활용하여 고객사의 보안 취약점을 식별하고 개선 방안을 제시합니다."
    }
];

const personaList = document.getElementById("persona-list");

if (personaList) {
    personas.forEach((persona) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${persona.name}:</strong> ${persona.description}`;
        personaList.appendChild(listItem);
    });
}

// 문의하기 버튼 클릭 시 메시지 표시
const contactButton = document.getElementById("contact-button");

if (contactButton) {
    contactButton.addEventListener("click", () => {
        alert("문의사항이 있으시면 info@sentinelguard.com으로 이메일을 보내주세요.");
    });
}
