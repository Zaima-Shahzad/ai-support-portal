/* ===================== USERS (static demo accounts) ===================== */

const users = [
  { username: "user", password: "user123", role: "customer", name: "John Customer" },
  { username: "admin", password: "admin123", role: "admin", name: "Alex Admin" }
];

/* ===================== DEFAULT SAMPLE DATA ===================== */

const defaultKB = [
  {
    id: "KB-1001",
    title: "Building Responsive Websites with Modern CSS",
    category: "Web Development",
    shortDesc: "Learn best practices for building responsive, mobile-friendly websites.",
    content: "Responsive web design ensures your site looks great on any device. Use flexible grid layouts, CSS media queries, and relative units like % and rem instead of fixed pixels. Test your site on multiple screen sizes and prioritize mobile performance, since most users browse on phones. Tools like Flexbox and CSS Grid make building adaptive layouts much easier than in the past."
  },
  {
    id: "KB-1002",
    title: "Getting Started with AI-Powered Customer Support",
    category: "AI Solutions",
    shortDesc: "How AI chat assistants can reduce response time and support costs.",
    content: "AI-powered support tools can instantly answer common customer questions, freeing up human agents for complex issues. These systems typically use natural language processing to understand user intent and match it to the most relevant knowledge base article or FAQ. Start with a small set of frequently asked questions, monitor performance, and expand the AI's knowledge over time based on real customer conversations."
  },
  {
    id: "KB-1003",
    title: "Choosing the Right Cloud Hosting Plan",
    category: "Cloud Services",
    shortDesc: "A quick guide to comparing cloud hosting options for your business.",
    content: "Cloud hosting plans vary based on compute power, storage, bandwidth, and scalability. Small businesses often start with shared or basic cloud instances, while growing companies benefit from auto-scaling and load-balanced setups. Consider your expected traffic, backup needs, and budget before committing to a plan, and always choose a provider with strong uptime guarantees and 24/7 support."
  },
  {
    id: "KB-1004",
    title: "Software Development Best Practices for Teams",
    category: "Software Development",
    shortDesc: "Key practices that help development teams ship quality software faster.",
    content: "Successful software teams rely on version control, code reviews, automated testing, and clear documentation. Breaking large features into smaller tasks makes progress easier to track and reduces bugs. Regular stand-up meetings and sprint planning keep everyone aligned, while continuous integration pipelines catch issues before they reach production."
  },
  {
    id: "KB-1005",
    title: "Troubleshooting Common Login and Access Issues",
    category: "Technical Support",
    shortDesc: "Steps to resolve the most common technical login problems.",
    content: "If you're unable to log in, first check that your username and password are typed correctly and that caps lock is off. Clearing your browser cache and cookies resolves many session-related issues. If the problem continues, try resetting your password or using a different browser. Persistent issues should be reported through a support ticket so our technical team can investigate further."
  },
  {
    id: "KB-1006",
    title: "Introduction to ERP Systems for Growing Businesses",
    category: "ERP Solutions",
    shortDesc: "Understand how ERP software helps unify business operations.",
    content: "Enterprise Resource Planning (ERP) systems bring together finance, inventory, HR, and sales data into a single platform, reducing manual work and data duplication. Businesses adopting ERP software typically see improved reporting accuracy and faster decision-making. When choosing an ERP solution, consider ease of integration with your existing tools, scalability, and the level of vendor support available."
  }
];

const defaultFAQ = [
  { id: "FAQ-2001", q: "What services does your company offer?", a: "We provide web development, AI solutions, cloud services, custom software development, ERP implementation, and ongoing technical support for businesses of all sizes.", category: "Services" },
  { id: "FAQ-2002", q: "Do you build custom AI solutions for businesses?", a: "Yes, we design and build custom AI solutions including chatbots, support automation, and data-driven tools tailored to your business needs.", category: "AI Development" },
  { id: "FAQ-2003", q: "Can you build a website for my business?", a: "Absolutely. Our web development team builds responsive, modern websites ranging from simple business sites to complex web applications.", category: "Web Development" },
  { id: "FAQ-2004", q: "How do I get technical support if something breaks?", a: "You can chat with our AI Assistant for instant answers, or submit a support ticket from the My Support Tickets menu for issues that need human review.", category: "Technical Support" },
  { id: "FAQ-2005", q: "What cloud hosting providers do you support?", a: "We work with major cloud providers and can help you choose, migrate to, and manage a hosting plan that fits your traffic and budget.", category: "Cloud Services" },
  { id: "FAQ-2006", q: "How is pricing determined for a project?", a: "Pricing depends on project scope, complexity, and timeline. We provide a detailed quote after understanding your requirements during an initial consultation.", category: "Pricing" },
  { id: "FAQ-2007", q: "Do you offer ongoing support after a project is completed?", a: "Yes, we offer post-launch project support packages that include bug fixes, updates, and feature enhancements.", category: "Project Support" },
  { id: "FAQ-2008", q: "How can I schedule a meeting with your team?", a: "You can request a meeting by submitting a support ticket with your preferred time, or mentioning it in the AI Chat and our team will follow up by email.", category: "Contact & Meetings" }
];

const defaultTickets = [
  { id: "TCK-1001", subject: "Cannot access dashboard", description: "I get an error page after login.", category: "Technical Support", priority: "High", status: "Open", createdDate: "2026-08-20", user: "user", comments: [] },
  { id: "TCK-1002", subject: "Website loading slowly", description: "Our company website has been loading very slowly since last week.", category: "Web Development", priority: "Medium", status: "Resolved", createdDate: "2026-08-15", user: "user", comments: [
    { text: "We optimized image sizes on your site. Please confirm if the speed has improved.", date: "2026-08-16", by: "Admin" }
  ] }
];

// AI chat canned responses (keyword based, tied to Knowledge Base topics)
const aiResponses = [
  { keywords: ["ai", "artificial intelligence", "chatbot", "automation"], reply: "We design and build custom AI solutions, including chat assistants and support automation, tailored to your business needs. Check the Knowledge Base article on AI Solutions for more details." },
  { keywords: ["web development", "website", "web app", "web design"], reply: "Our web development team builds responsive, modern websites and web applications using best practices like flexible layouts and mobile-first design. See the Knowledge Base article on Web Development for more." },
  { keywords: ["cloud", "hosting", "server"], reply: "We help businesses choose and manage cloud hosting plans based on their traffic, storage, and scalability needs. Read the Knowledge Base article on Cloud Services for a full guide." },
  { keywords: ["erp", "enterprise resource"], reply: "Our ERP solutions unify finance, inventory, HR, and sales into a single platform, improving reporting accuracy and reducing manual work. See the Knowledge Base article on ERP Solutions for more." },
  { keywords: ["support", "help", "issue", "problem", "login", "password"], reply: "For technical issues, first try clearing your browser cache or resetting your password. If the issue continues, please submit a support ticket so our team can assist you directly." },
  { keywords: ["price", "pricing", "cost", "quote"], reply: "Pricing depends on project scope, complexity, and timeline. We provide a detailed quote after understanding your requirements — feel free to submit a ticket to request one." },
  { keywords: ["hello", "hi", "hey"], reply: "Hello! I'm your AI Support Assistant. Ask me about our AI, web development, cloud, ERP, or support services." }
];

const AI_FALLBACK_REPLY = "I don't have enough information in the current knowledge base to answer this question. Please create a support ticket or contact our team.";

/* ===================== LOCAL STORAGE HELPERS ===================== */

function loadData(key, fallbackValue) {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Error loading " + key, e);
  }
  saveData(key, fallbackValue);
  return fallbackValue;
}

function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Error saving " + key, e);
  }
}

/* ===================== APPLICATION STATE ===================== */

let currentUser = null;
let currentConversationId = null;
let adminKbEditingId = null;
let adminFaqEditingId = null;
let adminTicketOpenId = null;

let knowledgeBase = loadData("sp_kb", defaultKB);
let faqData = loadData("sp_faq", defaultFAQ);
let tickets = loadData("sp_tickets", defaultTickets);
let conversations = loadData("sp_conversations", []);
let unanswered = loadData("sp_unanswered", []);

/* ===================== DOM READY ===================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginBtn").addEventListener("click", handleLogin);
  document.getElementById("logoutBtn").addEventListener("click", handleLogout);
  document.getElementById("password").addEventListener("keydown", e => {
    if (e.key === "Enter") handleLogin();
  });

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => showSection(btn.dataset.target, btn));
  });

  // Dashboard
  document.getElementById("dashboardSearch").addEventListener("input", renderDashboardSearch);
  document.getElementById("askAiBtn").addEventListener("click", () => navigateTo("chatSection"));
  document.querySelectorAll(".quick-action-btn, .dash-card").forEach(el => {
    el.addEventListener("click", () => navigateTo(el.dataset.target));
  });

  // Knowledge Base
  document.getElementById("kbSearch").addEventListener("input", renderKB);
  document.getElementById("kbBackBtn").addEventListener("click", hideArticleDetail);

  // FAQ
  document.getElementById("faqSearch").addEventListener("input", renderFAQ);

  // AI Chat
  document.getElementById("chatSendBtn").addEventListener("click", sendChatMessage);
  document.getElementById("chatInput").addEventListener("keydown", e => {
    if (e.key === "Enter") sendChatMessage();
  });
  document.getElementById("clearChatBtn").addEventListener("click", clearChatConversation);

  // Support Tickets (customer)
  document.getElementById("ticketSubmitBtn").addEventListener("click", submitTicket);

  // My Conversations
  document.getElementById("conversationBackBtn").addEventListener("click", hideConversationDetail);

  // Admin: Knowledge Articles
  document.getElementById("addKbBtn").addEventListener("click", () => openAdminKbForm(null));
  document.getElementById("adminKbSaveBtn").addEventListener("click", saveAdminKbArticle);
  document.getElementById("adminKbCancelBtn").addEventListener("click", closeAdminKbForm);

  // Admin: FAQs
  document.getElementById("addFaqBtn").addEventListener("click", () => openAdminFaqForm(null));
  document.getElementById("adminFaqSaveBtn").addEventListener("click", saveAdminFaq);
  document.getElementById("adminFaqCancelBtn").addEventListener("click", closeAdminFaqForm);

  // Admin: Tickets
  document.getElementById("adminTicketBackBtn").addEventListener("click", closeAdminTicketDetail);
  document.getElementById("adminTicketStatusSelect").addEventListener("change", updateAdminTicketStatus);
  document.getElementById("adminTicketCommentBtn").addEventListener("click", addAdminTicketComment);
});

/* ===================== LOGIN / LOGOUT ===================== */

function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("loginError");

  if (!username || !password) {
    errorBox.textContent = "Please enter both username and password.";
    errorBox.classList.remove("hidden");
    return;
  }

  const found = users.find(u => u.username === username && u.password === password);

  if (!found) {
    errorBox.textContent = "Invalid username or password. Try the demo accounts shown below.";
    errorBox.classList.remove("hidden");
    return;
  }

  errorBox.classList.add("hidden");
  currentUser = found;
  currentConversationId = null;

  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  document.getElementById("welcomeText").textContent = `${found.name} (${found.role})`;
  document.getElementById("dashUserName").textContent = found.name;

  applyRoleVisibility();
  renderKB();
  renderFAQ();
  resetChatWindow();

  if (currentUser.role === "admin") {
    refreshAdminData();
    navigateTo("adminDashboardSection");
  } else {
    updateDashboardStats();
    renderMyTicketsList();
    renderMyConversationsList();
    navigateTo("dashboardSection");
  }
}

function handleLogout() {
  currentUser = null;
  currentConversationId = null;
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("app").classList.add("hidden");
  document.getElementById("loginScreen").classList.remove("hidden");
}

function applyRoleVisibility() {
  const isAdmin = currentUser.role === "admin";
  document.querySelectorAll(".customer-only").forEach(el => el.classList.toggle("hidden", isAdmin));
  document.querySelectorAll(".admin-only").forEach(el => el.classList.toggle("hidden", !isAdmin));
}

/* ===================== NAVIGATION ===================== */

function navigateTo(targetId) {
  const navBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
  showSection(targetId, navBtn);
}

function showSection(targetId, btn) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(targetId).classList.remove("hidden");

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if (targetId === "dashboardSection") updateDashboardStats();
  if (targetId === "kbSection") hideArticleDetail();
  if (targetId === "ticketSection") renderMyTicketsList();
  if (targetId === "conversationsSection") { hideConversationDetail(); renderMyConversationsList(); }

  if (targetId === "adminDashboardSection") renderAdminStats();
  if (targetId === "adminKbSection") { closeAdminKbForm(); renderAdminKbList(); }
  if (targetId === "adminFaqSection") { closeAdminFaqForm(); renderAdminFaqList(); }
  if (targetId === "adminTicketsSection") { closeAdminTicketDetail(); renderAdminTicketsList(); }
  if (targetId === "adminQuestionsSection") renderAdminQuestionsList();
  if (targetId === "adminAnalyticsSection") renderAnalyticsCharts();
}

/* ===================== KNOWLEDGE BASE (CUSTOMER) ===================== */

function renderKB() {
  const query = document.getElementById("kbSearch").value.toLowerCase().trim();
  const container = document.getElementById("kbResults");
  const emptyBox = document.getElementById("kbEmpty");

  const filtered = knowledgeBase.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.content.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  container.innerHTML = "";

  if (filtered.length === 0) {
    emptyBox.classList.remove("hidden");
    return;
  }
  emptyBox.classList.add("hidden");

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "kb-card";
    card.innerHTML = `
      <span class="kb-tag">${escapeHtml(item.category)}</span>
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.shortDesc)}</p>
      <button class="kb-read-more">Read More</button>
    `;
    card.querySelector(".kb-read-more").addEventListener("click", () => showArticleDetail(item));
    container.appendChild(card);
  });
}

function showArticleDetail(item) {
  document.getElementById("kbListView").classList.add("hidden");
  document.getElementById("kbDetailView").classList.remove("hidden");
  document.getElementById("kbDetailCategory").textContent = item.category;
  document.getElementById("kbDetailTitle").textContent = item.title;
  document.getElementById("kbDetailContent").textContent = item.content;
}

function hideArticleDetail() {
  document.getElementById("kbDetailView").classList.add("hidden");
  document.getElementById("kbListView").classList.remove("hidden");
}

/* ===================== FAQ (CUSTOMER) ===================== */

function renderFAQ() {
  const query = document.getElementById("faqSearch").value.toLowerCase().trim();
  const container = document.getElementById("faqList");
  const emptyBox = document.getElementById("faqEmpty");

  const filtered = faqData.filter(item =>
    item.q.toLowerCase().includes(query) ||
    item.a.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  container.innerHTML = "";

  if (filtered.length === 0) {
    emptyBox.classList.remove("hidden");
    return;
  }
  emptyBox.classList.add("hidden");

  filtered.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "faq-item";
    wrapper.innerHTML = `
      <div class="faq-question">
        <span>
          <span class="faq-question-text">${escapeHtml(item.q)}</span><br>
          <span class="faq-category-tag">${escapeHtml(item.category)}</span>
        </span>
        <span>▾</span>
      </div>
      <div class="faq-answer">${escapeHtml(item.a)}</div>
    `;
    wrapper.querySelector(".faq-question").addEventListener("click", () => {
      wrapper.querySelector(".faq-answer").classList.toggle("open");
    });
    container.appendChild(wrapper);
  });
}

/* ===================== DASHBOARD (CUSTOMER) ===================== */

function updateDashboardStats() {
  if (!currentUser) return;
  const myTickets = tickets.filter(t => t.user === currentUser.username);

  document.getElementById("dashKbCount").textContent = knowledgeBase.length;
  document.getElementById("dashFaqCount").textContent = faqData.length;
  document.getElementById("dashTicketCount").textContent = myTickets.length;

  renderRecentConversations();
}

function renderRecentConversations() {
  const listEl = document.getElementById("dashRecentChats");
  const emptyEl = document.getElementById("dashRecentChatsEmpty");
  const myConvos = conversations.filter(c => c.user === currentUser.username);

  listEl.innerHTML = "";

  if (myConvos.length === 0) {
    emptyEl.classList.remove("hidden");
    return;
  }
  emptyEl.classList.add("hidden");

  const latest = myConvos[myConvos.length - 1];
  const preview = latest.messages.slice(-3).map(m => `${m.sender === "user" ? "You" : "AI"}: ${m.text}`).join(" | ");
  const card = document.createElement("div");
  card.className = "ticket-card";
  card.innerHTML = `<h4>${escapeHtml(latest.title)}</h4><p class="ticket-card-desc">${escapeHtml(preview)}</p>`;
  listEl.appendChild(card);
}

function renderDashboardSearch() {
  const query = document.getElementById("dashboardSearch").value.toLowerCase().trim();
  const resultsBox = document.getElementById("dashboardSearchResults");
  const emptyBox = document.getElementById("dashboardSearchEmpty");

  resultsBox.innerHTML = "";

  if (!query) {
    resultsBox.classList.add("hidden");
    emptyBox.classList.add("hidden");
    return;
  }

  const kbMatches = knowledgeBase.filter(item =>
    item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query)
  );
  const faqMatches = faqData.filter(item =>
    item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query)
  );

  if (kbMatches.length === 0 && faqMatches.length === 0) {
    resultsBox.classList.add("hidden");
    emptyBox.classList.remove("hidden");
    return;
  }

  emptyBox.classList.add("hidden");
  resultsBox.classList.remove("hidden");

  kbMatches.forEach(item => {
    const card = document.createElement("div");
    card.className = "kb-card";
    card.innerHTML = `<h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.shortDesc)}</p><span class="kb-tag">Knowledge Base</span>`;
    resultsBox.appendChild(card);
  });

  faqMatches.forEach(item => {
    const card = document.createElement("div");
    card.className = "kb-card";
    card.innerHTML = `<h4>${escapeHtml(item.q)}</h4><p>${escapeHtml(item.a)}</p><span class="result-type-tag">FAQ</span>`;
    resultsBox.appendChild(card);
  });
}

/* ===================== AI CHAT (CUSTOMER) ===================== */

function resetChatWindow() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.innerHTML = `<div id="chatEmptyState" class="empty-state">No messages yet. Ask a question below to start chatting with the AI Assistant.</div>`;
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  hideChatEmptyState();
  appendChatMessage("user", text);
  input.value = "";

  let conversation = getOrCreateConversation(text);
  conversation.messages.push({ sender: "user", text });
  saveData("sp_conversations", conversations);

  const loadingBox = document.getElementById("chatLoading");
  loadingBox.classList.remove("hidden");

  setTimeout(() => {
    loadingBox.classList.add("hidden");
    const reply = getAIReply(text);
    appendChatMessage("ai", reply.text, reply.fromKnowledgeBase);

    conversation.messages.push({ sender: "ai", text: reply.text });
    saveData("sp_conversations", conversations);

    if (!reply.fromKnowledgeBase) {
      unanswered.push({
        id: "Q-" + Date.now(),
        question: text,
        date: todayStr(),
        status: "New",
        user: currentUser.username
      });
      saveData("sp_unanswered", unanswered);
    }

    updateDashboardStats();
  }, 900);
}

function getOrCreateConversation(firstMessageText) {
  if (currentConversationId) {
    const existing = conversations.find(c => c.id === currentConversationId);
    if (existing) return existing;
  }
  const newConvo = {
    id: "CONV-" + Date.now(),
    user: currentUser.username,
    title: firstMessageText.length > 40 ? firstMessageText.slice(0, 40) + "..." : firstMessageText,
    date: todayStr(),
    messages: []
  };
  conversations.push(newConvo);
  currentConversationId = newConvo.id;
  return newConvo;
}

function getAIReply(text) {
  const lower = text.toLowerCase();
  for (const item of aiResponses) {
    if (item.keywords.some(k => lower.includes(k))) {
      return { text: item.reply, fromKnowledgeBase: true };
    }
  }
  return { text: AI_FALLBACK_REPLY, fromKnowledgeBase: false };
}

function appendChatMessage(sender, text, fromKnowledgeBase) {
  const chatWindow = document.getElementById("chatWindow");
  const msg = document.createElement("div");
  msg.className = `chat-msg ${sender}`;
  msg.textContent = text;

  if (sender === "ai" && fromKnowledgeBase) {
    const note = document.createElement("span");
    note.className = "chat-source-note";
    note.textContent = "Based on company Knowledge Base";
    msg.appendChild(note);
  }

  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function hideChatEmptyState() {
  const emptyState = document.getElementById("chatEmptyState");
  if (emptyState) emptyState.remove();
}

function clearChatConversation() {
  resetChatWindow();
  currentConversationId = null;
  updateDashboardStats();
}

/* ===================== SUPPORT TICKETS (CUSTOMER) ===================== */

function submitTicket() {
  const subject = document.getElementById("ticketSubject").value.trim();
  const description = document.getElementById("ticketDescription").value.trim();
  const category = document.getElementById("ticketCategory").value;
  const priority = document.getElementById("ticketPriority").value;

  const errorBox = document.getElementById("ticketError");
  const successBox = document.getElementById("ticketSuccess");
  errorBox.classList.add("hidden");
  successBox.classList.add("hidden");

  if (!subject || !description) {
    errorBox.textContent = "Please fill in both the subject and description fields.";
    errorBox.classList.remove("hidden");
    return;
  }

  const newTicket = {
    id: "TCK-" + Date.now(),
    subject,
    description,
    category,
    priority,
    status: "Open",
    createdDate: todayStr(),
    user: currentUser.username,
    comments: []
  };

  tickets.push(newTicket);
  saveData("sp_tickets", tickets);

  successBox.textContent = `Your ticket (${newTicket.id}) has been submitted successfully!`;
  successBox.classList.remove("hidden");

  document.getElementById("ticketSubject").value = "";
  document.getElementById("ticketDescription").value = "";
  document.getElementById("ticketCategory").value = "Technical Support";
  document.getElementById("ticketPriority").value = "Medium";

  updateDashboardStats();
  renderMyTicketsList();
}

function renderMyTicketsList() {
  if (!currentUser) return;
  const listEl = document.getElementById("myTicketsList");
  const emptyEl = document.getElementById("myTicketsEmpty");
  const myTickets = tickets.filter(t => t.user === currentUser.username).slice().reverse();

  listEl.innerHTML = "";

  if (myTickets.length === 0) {
    emptyEl.classList.remove("hidden");
    return;
  }
  emptyEl.classList.add("hidden");

  myTickets.forEach(t => listEl.appendChild(buildCustomerTicketCard(t)));
}

function buildCustomerTicketCard(t) {
  const card = document.createElement("div");
  card.className = "ticket-card";
  card.innerHTML = `
    <h4>${t.id} - ${escapeHtml(t.subject)}</h4>
    <p class="ticket-card-desc">${escapeHtml(t.description)}</p>
    <p>Created: ${t.createdDate}</p>
    <div class="ticket-badges">
      <span class="badge badge-category">${escapeHtml(t.category)}</span>
      <span class="badge ${priorityClass(t.priority)}">${t.priority} Priority</span>
      <span class="badge ${statusClass(t.status)}">${t.status}</span>
    </div>
    ${t.comments.length > 0 ? `<div class="comment-heading">Latest update:</div><div class="comment-card">${escapeHtml(t.comments[t.comments.length - 1].text)}<span>${t.comments[t.comments.length - 1].date}</span></div>` : ""}
  `;
  return card;
}

/* ===================== MY CONVERSATIONS (CUSTOMER) ===================== */

function renderMyConversationsList() {
  if (!currentUser) return;
  const listEl = document.getElementById("myConversationsList");
  const emptyEl = document.getElementById("myConversationsEmpty");
  const myConvos = conversations.filter(c => c.user === currentUser.username).slice().reverse();

  listEl.innerHTML = "";

  if (myConvos.length === 0) {
    emptyEl.classList.remove("hidden");
    return;
  }
  emptyEl.classList.add("hidden");

  myConvos.forEach(convo => {
    const preview = convo.messages.length > 0 ? convo.messages[0].text : "";
    const card = document.createElement("div");
    card.className = "ticket-card";
    card.innerHTML = `
      <h4>${escapeHtml(convo.title)}</h4>
      <p>${convo.date}</p>
      <p class="ticket-card-desc">${escapeHtml(preview.length > 80 ? preview.slice(0, 80) + "..." : preview)}</p>
      <button class="btn-primary small-btn btn-outline view-convo-btn">View</button>
    `;
    card.querySelector(".view-convo-btn").addEventListener("click", () => showConversationDetail(convo));
    listEl.appendChild(card);
  });
}

function showConversationDetail(convo) {
  document.getElementById("conversationsListView").classList.add("hidden");
  document.getElementById("conversationDetailView").classList.remove("hidden");
  document.getElementById("conversationDetailTitle").textContent = convo.title;
  document.getElementById("conversationDetailDate").textContent = "Date: " + convo.date;

  const messagesBox = document.getElementById("conversationDetailMessages");
  messagesBox.innerHTML = "";
  convo.messages.forEach(m => {
    const msg = document.createElement("div");
    msg.className = `chat-msg ${m.sender}`;
    msg.textContent = m.text;
    messagesBox.appendChild(msg);
  });
}

function hideConversationDetail() {
  document.getElementById("conversationDetailView").classList.add("hidden");
  document.getElementById("conversationsListView").classList.remove("hidden");
}

/* ===================== ADMIN: DASHBOARD STATS ===================== */

function refreshAdminData() {
  renderAdminStats();
  renderAdminKbList();
  renderAdminFaqList();
  renderAdminTicketsList();
  renderAdminQuestionsList();
  renderAnalyticsCharts();
}

function renderAdminStats() {
  const questionsAsked = conversations.reduce((sum, c) => sum + c.messages.filter(m => m.sender === "user").length, 0);
  const openTickets = tickets.filter(t => t.status !== "Resolved" && t.status !== "Closed").length;
  const resolvedTickets = tickets.filter(t => t.status === "Resolved" || t.status === "Closed").length;

  document.getElementById("statTotalUsers").textContent = users.length;
  document.getElementById("statTotalConversations").textContent = conversations.length;
  document.getElementById("statQuestionsAsked").textContent = questionsAsked;
  document.getElementById("statOpenTickets").textContent = openTickets;
  document.getElementById("statResolvedTickets").textContent = resolvedTickets;
  document.getElementById("statKbArticles").textContent = knowledgeBase.length;
  document.getElementById("statUnanswered").textContent = unanswered.length;
}

/* ===================== ADMIN: KNOWLEDGE ARTICLE MANAGEMENT ===================== */

function renderAdminKbList() {
  const listEl = document.getElementById("adminKbList");
  const emptyEl = document.getElementById("adminKbEmpty");

  listEl.innerHTML = "";

  if (knowledgeBase.length === 0) {
    emptyEl.classList.remove("hidden");
    return;
  }
  emptyEl.classList.add("hidden");

  knowledgeBase.forEach(item => {
    const card = document.createElement("div");
    card.className = "ticket-card";
    card.innerHTML = `
      <h4>${escapeHtml(item.title)}</h4>
      <span class="badge badge-category">${escapeHtml(item.category)}</span>
      <p class="ticket-card-desc">${escapeHtml(item.shortDesc)}</p>
      <div class="action-btn-row">
        <button class="btn-primary small-btn btn-outline edit-kb-btn">Edit</button>
        <button class="btn-primary small-btn btn-danger delete-kb-btn">Delete</button>
      </div>
    `;
    card.querySelector(".edit-kb-btn").addEventListener("click", () => openAdminKbForm(item));
    card.querySelector(".delete-kb-btn").addEventListener("click", () => deleteAdminKbArticle(item.id));
    listEl.appendChild(card);
  });
}

function openAdminKbForm(item) {
  document.getElementById("adminKbListView").classList.add("hidden");
  document.getElementById("adminKbFormView").classList.remove("hidden");
  document.getElementById("adminKbError").classList.add("hidden");

  adminKbEditingId = item ? item.id : null;
  document.getElementById("adminKbFormTitle").textContent = item ? "Edit Article" : "Add New Article";
  document.getElementById("adminKbTitle").value = item ? item.title : "";
  document.getElementById("adminKbCategory").value = item ? item.category : "";
  document.getElementById("adminKbShortDesc").value = item ? item.shortDesc : "";
  document.getElementById("adminKbContent").value = item ? item.content : "";
}

function closeAdminKbForm() {
  document.getElementById("adminKbFormView").classList.add("hidden");
  document.getElementById("adminKbListView").classList.remove("hidden");
}

function saveAdminKbArticle() {
  const title = document.getElementById("adminKbTitle").value.trim();
  const category = document.getElementById("adminKbCategory").value.trim();
  const shortDesc = document.getElementById("adminKbShortDesc").value.trim();
  const content = document.getElementById("adminKbContent").value.trim();
  const errorBox = document.getElementById("adminKbError");

  if (!title || !category || !shortDesc || !content) {
    errorBox.textContent = "Please fill in all fields before saving.";
    errorBox.classList.remove("hidden");
    return;
  }
  errorBox.classList.add("hidden");

  if (adminKbEditingId) {
    const existing = knowledgeBase.find(a => a.id === adminKbEditingId);
    existing.title = title;
    existing.category = category;
    existing.shortDesc = shortDesc;
    existing.content = content;
  } else {
    knowledgeBase.push({ id: "KB-" + Date.now(), title, category, shortDesc, content });
  }

  saveData("sp_kb", knowledgeBase);
  closeAdminKbForm();
  renderAdminKbList();
  renderAdminStats();
  renderKB();
}

function deleteAdminKbArticle(id) {
  if (!confirm("Delete this knowledge article? This cannot be undone.")) return;
  knowledgeBase = knowledgeBase.filter(a => a.id !== id);
  saveData("sp_kb", knowledgeBase);
  renderAdminKbList();
  renderAdminStats();
  renderKB();
}

/* ===================== ADMIN: FAQ MANAGEMENT ===================== */

function renderAdminFaqList() {
  const listEl = document.getElementById("adminFaqList");
  const emptyEl = document.getElementById("adminFaqEmpty");

  listEl.innerHTML = "";

  if (faqData.length === 0) {
    emptyEl.classList.remove("hidden");
    return;
  }
  emptyEl.classList.add("hidden");

  faqData.forEach(item => {
    const card = document.createElement("div");
    card.className = "ticket-card";
    card.innerHTML = `
      <h4>${escapeHtml(item.q)}</h4>
      <span class="badge badge-category">${escapeHtml(item.category)}</span>
      <p class="ticket-card-desc">${escapeHtml(item.a)}</p>
      <div class="action-btn-row">
        <button class="btn-primary small-btn btn-outline edit-faq-btn">Edit</button>
        <button class="btn-primary small-btn btn-danger delete-faq-btn">Delete</button>
      </div>
    `;
    card.querySelector(".edit-faq-btn").addEventListener("click", () => openAdminFaqForm(item));
    card.querySelector(".delete-faq-btn").addEventListener("click", () => deleteAdminFaq(item.id));
    listEl.appendChild(card);
  });
}

function openAdminFaqForm(item) {
  document.getElementById("adminFaqListView").classList.add("hidden");
  document.getElementById("adminFaqFormView").classList.remove("hidden");
  document.getElementById("adminFaqError").classList.add("hidden");

  adminFaqEditingId = item ? item.id : null;
  document.getElementById("adminFaqFormTitle").textContent = item ? "Edit FAQ" : "Add New FAQ";
  document.getElementById("adminFaqQuestion").value = item ? item.q : "";
  document.getElementById("adminFaqCategory").value = item ? item.category : "";
  document.getElementById("adminFaqAnswer").value = item ? item.a : "";
}

function closeAdminFaqForm() {
  document.getElementById("adminFaqFormView").classList.add("hidden");
  document.getElementById("adminFaqListView").classList.remove("hidden");
}

function saveAdminFaq() {
  const q = document.getElementById("adminFaqQuestion").value.trim();
  const category = document.getElementById("adminFaqCategory").value.trim();
  const a = document.getElementById("adminFaqAnswer").value.trim();
  const errorBox = document.getElementById("adminFaqError");

  if (!q || !category || !a) {
    errorBox.textContent = "Please fill in all fields before saving.";
    errorBox.classList.remove("hidden");
    return;
  }
  errorBox.classList.add("hidden");

  if (adminFaqEditingId) {
    const existing = faqData.find(f => f.id === adminFaqEditingId);
    existing.q = q;
    existing.category = category;
    existing.a = a;
  } else {
    faqData.push({ id: "FAQ-" + Date.now(), q, category, a });
  }

  saveData("sp_faq", faqData);
  closeAdminFaqForm();
  renderAdminFaqList();
  renderFAQ();
}

function deleteAdminFaq(id) {
  if (!confirm("Delete this FAQ? This cannot be undone.")) return;
  faqData = faqData.filter(f => f.id !== id);
  saveData("sp_faq", faqData);
  renderAdminFaqList();
  renderFAQ();
}

/* ===================== ADMIN: CUSTOMER TICKETS ===================== */

function renderAdminTicketsList() {
  const listEl = document.getElementById("adminTicketsList");
  const emptyEl = document.getElementById("adminTicketsEmpty");

  listEl.innerHTML = "";

  if (tickets.length === 0) {
    emptyEl.classList.remove("hidden");
    return;
  }
  emptyEl.classList.add("hidden");

  tickets.slice().reverse().forEach(t => {
    const card = document.createElement("div");
    card.className = "ticket-card";
    card.innerHTML = `
      <h4>${t.id} - ${escapeHtml(t.subject)} <span class="ticket-card-desc">(by ${escapeHtml(t.user)})</span></h4>
      <p>Created: ${t.createdDate}</p>
      <div class="ticket-badges">
        <span class="badge badge-category">${escapeHtml(t.category)}</span>
        <span class="badge ${priorityClass(t.priority)}">${t.priority} Priority</span>
        <span class="badge ${statusClass(t.status)}">${t.status}</span>
      </div>
      <div class="action-btn-row">
        <button class="btn-primary small-btn btn-outline manage-ticket-btn">Manage Ticket</button>
      </div>
    `;
    card.querySelector(".manage-ticket-btn").addEventListener("click", () => openAdminTicketDetail(t.id));
    listEl.appendChild(card);
  });
}

function openAdminTicketDetail(id) {
  adminTicketOpenId = id;
  const t = tickets.find(tk => tk.id === id);
  if (!t) return;

  document.getElementById("adminTicketsListView").classList.add("hidden");
  document.getElementById("adminTicketDetailView").classList.remove("hidden");

  document.getElementById("adminTicketSubject").textContent = `${t.id} - ${t.subject}`;
  document.getElementById("adminTicketMeta").textContent = `Submitted by ${t.user} on ${t.createdDate} | Category: ${t.category} | Priority: ${t.priority}`;
  document.getElementById("adminTicketDescription").textContent = t.description;
  document.getElementById("adminTicketStatusSelect").value = t.status;
  document.getElementById("adminTicketCommentInput").value = "";

  renderAdminTicketComments(t);
}

function renderAdminTicketComments(t) {
  const box = document.getElementById("adminTicketComments");
  box.innerHTML = "";
  if (t.comments.length === 0) {
    box.innerHTML = `<div class="empty-state">No comments yet.</div>`;
    return;
  }
  t.comments.forEach(c => {
    const card = document.createElement("div");
    card.className = "comment-card";
    card.innerHTML = `${escapeHtml(c.text)}<span>${escapeHtml(c.by)} — ${c.date}</span>`;
    box.appendChild(card);
  });
}

function closeAdminTicketDetail() {
  adminTicketOpenId = null;
  document.getElementById("adminTicketDetailView").classList.add("hidden");
  document.getElementById("adminTicketsListView").classList.remove("hidden");
}

function updateAdminTicketStatus() {
  const t = tickets.find(tk => tk.id === adminTicketOpenId);
  if (!t) return;
  t.status = document.getElementById("adminTicketStatusSelect").value;
  saveData("sp_tickets", tickets);
  renderAdminStats();
}

function addAdminTicketComment() {
  const t = tickets.find(tk => tk.id === adminTicketOpenId);
  if (!t) return;

  const input = document.getElementById("adminTicketCommentInput");
  const text = input.value.trim();
  if (!text) return;

  t.comments.push({ text, date: todayStr(), by: "Admin" });
  saveData("sp_tickets", tickets);
  input.value = "";
  renderAdminTicketComments(t);
}

/* ===================== ADMIN: CUSTOMER QUESTIONS ===================== */

function renderAdminQuestionsList() {
  const listEl = document.getElementById("adminQuestionsList");
  const emptyEl = document.getElementById("adminQuestionsEmpty");

  listEl.innerHTML = "";

  if (unanswered.length === 0) {
    emptyEl.classList.remove("hidden");
    return;
  }
  emptyEl.classList.add("hidden");

  unanswered.slice().reverse().forEach(q => {
    const card = document.createElement("div");
    card.className = "ticket-card";
    card.innerHTML = `
      <h4>${escapeHtml(q.question)}</h4>
      <p>Asked on ${q.date} by ${escapeHtml(q.user)}</p>
      <span class="badge ${statusClass(q.status)}">${q.status}</span>
      <div class="action-btn-row">
        <button class="btn-primary small-btn btn-outline mark-reviewed-btn">Mark Reviewed</button>
        <button class="btn-primary small-btn btn-outline mark-needs-article-btn">Mark Needs Knowledge Article</button>
      </div>
    `;
    card.querySelector(".mark-reviewed-btn").addEventListener("click", () => updateQuestionStatus(q.id, "Reviewed"));
    card.querySelector(".mark-needs-article-btn").addEventListener("click", () => updateQuestionStatus(q.id, "Needs Knowledge Article"));
    listEl.appendChild(card);
  });
}

function updateQuestionStatus(id, status) {
  const q = unanswered.find(item => item.id === id);
  if (!q) return;
  q.status = status;
  saveData("sp_unanswered", unanswered);
  renderAdminQuestionsList();
  renderAdminStats();
}

/* ===================== ADMIN: ANALYTICS ===================== */

function renderAnalyticsCharts() {
  renderQuestionsOverTimeChart();
  renderTicketsByStatusChart();
}

function renderQuestionsOverTimeChart() {
  const container = document.getElementById("questionsOverTimeChart");
  const emptyBox = document.getElementById("questionsOverTimeEmpty");
  container.innerHTML = "";

  if (conversations.length === 0) {
    emptyBox.classList.remove("hidden");
    return;
  }
  emptyBox.classList.add("hidden");

  const countsByDate = {};
  conversations.forEach(c => {
    const userMsgCount = c.messages.filter(m => m.sender === "user").length;
    countsByDate[c.date] = (countsByDate[c.date] || 0) + userMsgCount;
  });

  const dates = Object.keys(countsByDate).sort();
  const maxCount = Math.max(1, ...dates.map(d => countsByDate[d]));

  dates.forEach(date => {
    const count = countsByDate[date];
    const percent = (count / maxCount) * 100;
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <span class="bar-label">${date}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${percent}%"></div></div>
      <span>${count}</span>
    `;
    container.appendChild(row);
  });
}

function renderTicketsByStatusChart() {
  const container = document.getElementById("ticketsByStatusChart");
  container.innerHTML = "";

  const statuses = ["Open", "In Progress", "Waiting for Customer", "Resolved", "Closed"];
  const maxCount = Math.max(1, ...statuses.map(s => tickets.filter(t => t.status === s).length));

  statuses.forEach(status => {
    const count = tickets.filter(t => t.status === status).length;
    const percent = (count / maxCount) * 100;
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <span class="bar-label">${status}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${percent}%"></div></div>
      <span>${count}</span>
    `;
    container.appendChild(row);
  });
}

/* ===================== UTIL ===================== */

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function priorityClass(priority) {
  return "priority-" + priority.toLowerCase();
}

function statusClass(status) {
  return "status-" + status.toLowerCase().replace(/\s+/g, "-");
}
