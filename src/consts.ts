// 抱元守一 · 文字最終版（來源：桌面《抱一文字最終版》）

export const SITE_BRAND = "抱元守一";
export const SITE_TITLE = "抱一";
export const SITE_NAME_EN = "BaoYuanSoYi";
export const SITE_DESCRIPTION =
	"抱元守一——在月光下的寧靜裡，找回身體的自主權。載體重啟 · 生活美學 · 頻率對位。";
export const SITE_TAGLINE_SUB = "在月光下的寧靜裡，找回身體的自主權。";
/** 首頁詩意：第一句單獨一列 */
export const SITE_HERO_LINE_1 = "在月光下的寧靜裡，找回身體的自主權。";
/** 首頁詩意：大音希聲句 */
export const SITE_HERO_LINE_2 = "大音希聲，大象無形。";
/** 首頁詩意：下一列單獨 */
export const SITE_HERO_LINE_3 =
	"當載體回歸初始的秩序，安靜而綿密的力量便會由深處而生。";
/** 完整一段（其他頁引用） */
export const SITE_HERO_VERSE = `${SITE_HERO_LINE_1}${SITE_HERO_LINE_2}${SITE_HERO_LINE_3}`;
export const SITE_HERO_LINE_23 = `${SITE_HERO_LINE_2}${SITE_HERO_LINE_3}`;
export const SITE_ROLE = "首席人生載體顧問";
export const SITE_PILLARS_LINE = "載體重啟 · 生活美學 · 頻率對位";
export const SITE_ORIGIN =
	"抱一，源自「抱一為天下式」的古義，意在回歸身心本源。";
export const SITE_MISSION =
	"我們陪伴您，一起探索飲食、日常練習與身心平衡的實證之路。";
export const SITE_HERO_LINES = [
	"大音希聲，大象無形。",
	"當載體回歸初始的秩序，安靜而綿密的力量便會由深處而生。",
] as const;
export const SITE_COMPANY = "步鹿丹思創意行銷有限公司";
/** 僅供 mailto／後端使用，頁面不直接顯示 */
export const SITE_EMAIL = "service@bluedance.com.tw";
export const SITE_MAILTO = `mailto:${SITE_EMAIL}`;
/** 正式網址（未來導向／sitemap），頁面不顯示 */
export const SITE_URL = "https://baoyuansoyi.bluedance.com.tw";
export const SITE_COPYRIGHT = `Copyright©2026 抱一 BaoYuanSoYi ${SITE_COMPANY} 版權所有`;

export const NAV_LINKS = [
	{ href: "/", label: "始源" },
	{ href: "/about", label: "真實" },
	{ href: "/philosophy", label: "理念" },
	{ href: "/manuscripts", label: "實證" },
	{ href: "/booking", label: "重啟" },
] as const;

export const FOOTER_LEGAL = [
	{ href: "/faq", label: "常見問題" },
	{ href: "/privacy", label: "隱私權" },
	{ href: "/terms", label: "服務條款" },
] as const;

/** 我的真實故事 */
export const ABOUT_STORY = {
	title: "我的真實故事",
	/** 第一段固定兩行（勿合併） */
	leadLines: [
		"從嚴重貧血、長期低潮與憂鬱狀態，到經歷心臟驟停的那一刻，",
		"我的身、心、靈同時走到谷底。",
	] as const,
	paragraphs: [
		"從嚴重貧血、長期低潮與憂鬱狀態，到經歷心臟驟停的那一刻，我的身、心、靈同時走到谷底。",
		"身體的載體崩壞、心智的徹底迷霧、靈魂的近乎登出……",
		"直到認定這是一場地球 online 真人 RPG 遊戲，所有谷底回彈才開始穩定發生。",
		"在求助了現代醫療、試過各種現代飲食觀和營養學之後，效果始終不彰。",
		"那時候的我，已如 80 歲的老嫗般時常腦霧沉重、全身無力。",
		// 「自主權。」以不換行字元鎖住，避免「權。」落單成行
		"經過不斷摸索與驗證，在短時間內明顯恢復清明與活力，也終於拿回了身體的自主權。",
		"我終於認知到：找自己→救自己→養自己→愛自己，正是解靈魂任務的大前提。",
	],
} as const;

/** 核心理念 · 三點 */
export const PHILOSOPHY_PILLARS = [
	{
		title: "回歸初始",
		body: "放掉現代社會的快節奏、剝除所有的外耗與燥氣，紮實地退回到生命最初、最純粹的溫潤水位。如同溫熱的粥水，無聲滋養。",
	},
	{
		title: "身體自主權",
		body: "自己才是這座載體聖殿的唯一君主。接收並理解身體的各項警示和提醒，拿回治理、調養自身氣血的絕對主導權。",
	},
	{
		title: "載體重啟",
		body: "每一次的乾燒及耗竭，都是重新洗牌的完美契機。在安靜中封存能量，在規律中完成轉化與重生，迎接元氣充盈的自己。",
	},
] as const;

/** 聖殿重啟／預約 */
export const BOOKING_COPY = {
	title: "聖殿重啟",
	body: "這是一席專屬於高淨值、渴望深度對話的私密空間。",
	body2:
		"不論您正處於身心靈哪一層的崩解，我都可以陪您一起撐起不容侵犯的寧靜聖殿。",
	note: "客製化服務，每月僅開放 5 席，高敏者優先。",
	cta: "預約席位",
	navCta: "預約席位",
	/** 點擊開啟郵件（Email 不顯示於頁面） */
	href: SITE_MAILTO,
} as const;

/** 常見問題 */
export const FAQ_ITEMS = [
	{
		q: "抱一提供什麼樣的服務？",
		a: "抱一提供個人生命實證與深度探索，以載體重啟為核心的養生分享，協助您找回身體的自主權與身心平衡。",
	},
	{
		q: "預約名額為何有限制？",
		a: "為維持服務品質與深度對位，本網站每月僅開放有限席位，進行適合度評估。",
	},
	{
		q: "預約前需要準備哪些資料？",
		a: "請提供姓名、Email、電話、生日與簡單現況描述。",
	},
	{
		q: "如何進行預約？",
		a: "請填寫網站預約表單，我方將盡快安排。",
	},
	{
		q: "服務形式為何？",
		a: "主要以一對一方式進行。",
	},
] as const;
