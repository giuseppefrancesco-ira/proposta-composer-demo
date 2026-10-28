const CONVERSATIONS = {
  adam: {
    id: 'adam',
    bookingCode: 'DEMO-1048',
    bookingStatus: 'Aperta · Soggiorno in corso',
    guestName: 'Adam Nowak',
    dates: '06/10/26 – 11/10/26',
    unit: 'App. Duomo Suite · S04',
    langCode: 'PL',
    langName: 'Polacco',
    channel: 'AIRBNB',
    msgCount: 9,
    handover: {
      motivo: 'Richiesta posto auto cortile + biancheria extra',
      urgenza: 'Media · Ospite in struttura',
      sentiment: 'Positivo (Codice Nuki OK)',
      statoAI: 'Bozza pronta da KB (94%)'
    },
    tags: ['#Parcheggio', '#Check-in', '#Biancheria', '#AccessoCodice'],
    standardDraftIT: 'Ciao Adam, grazie! Per il parcheggio trovi il posto auto n. 14 nel cortile interno, per aprire il cancello puoi usare lo stesso codice 000000. Per gli asciugamani extra scrivici pure qui quando vuoi e te li portiamo subito.',
    standardDraftTarget: 'Cześć Adam, dziękuję! Na wewnętrznym dziedzińcu czeka miejsce parkingowe nr 14, bramę otworzysz tym samym kodem 000000. W sprawie dodatkowych ręczników napisz do nas tutaj w każdej chwili, a od razu je przyniesiemy.',
    focusDraftIT: "Ciao Adam, siamo felici che il codice abbia funzionato subito e che ti stia trovando bene!\n\nPer il parcheggio puoi usare il posto auto n. 14 nel cortile interno: il cancello automatico si apre con lo stesso codice 000000 sulla tastiera esterna.\n\nSe ti serviranno altri asciugamani scrivici pure qui e te li faremo avere in appartamento in mezz'ora. Ti ricordiamo solo che domenica il check-out è entro le 10:30 e potrai lasciare le chiavi sul tavolo. A presto!",
    focusDraftTarget: 'Cześć Adam, cieszymy się, że kod zadziałał od razu i że dobrze się u nas czujesz! Jeśli chodzi o parking, możesz skorzystać z miejsca nr 14 na wewnętrznym dziedzińcu, brama automatyczna otwiera się tym samym kodem 000000 na zewnętrznej klawiaturze. Gdybyś potrzebował dodatkowych ręczników, napisz do nas tutaj, a dostarczymy je do apartamentu w pół godziny. Przypominamy tylko, że w niedzielę wymeldowanie jest do 10:30, a klucze możesz zostawić na stole. Do zobaczenia!',
    messages: [
      {
        id: 'm1',
        sender: 'guest',
        author: 'ADAM · 11:20',
        badges: [
          { text: 'AIRBNB', cls: 'channel' },
          { text: 'PL -> IT', cls: 'booking' }
        ],
        textOriginal: 'Dzień dobry! Kod Nuki zadziałał od razu, mieszkanie jest świetne. Mam pytanie: czy na podwórku jest dedykowane miejsce parkingowe dla gości?',
        textTranslated: "Buongiorno! Il codice Nuki ha funzionato subito, l'appartamento è ottimo. Ho una domanda: nel cortile c'è un posto auto riservato per gli ospiti?"
      },
      {
        id: 'm2',
        sender: 'host',
        scheduled: true,
        author: 'TU · Programmato per Domani 09:00',
        badges: [
          { text: 'PROGRAMMATO', cls: 'channel' },
          { text: 'TEMPLATE CHECK-OUT', cls: 'ai' },
          { text: 'DOPPIA VERIFICA OK', cls: 'pms' }
        ],
        textOriginal: 'Dzień dobry Adam! Przypominamy, że jutro wymeldowanie jest do godziny 10:30. Klucze możesz zostawić na stole w salonie.',
        textTranslated: 'Testo originale (IT): Buongiorno Adam! Ti ricordiamo che domani il check-out è previsto entro le 10:30. Puoi lasciare le chiavi sul tavolo in soggiorno.'
      },
      {
        id: 'm3',
        sender: 'guest',
        author: 'ADAM · 11:45',
        badges: [
          { text: 'AIRBNB', cls: 'channel' },
          { text: 'PL -> IT', cls: 'booking' },
          { text: 'SENTIMENT POSITIVO', cls: 'pms' }
        ],
        textOriginal: 'Super, dziękuję! Właśnie przeczytałem instrukcję segregacji. Jeśli będę potrzebował ręczników, napiszę do Was. Dziękuję za wskazówki na zwiedzanie miasta.',
        textTranslated: 'Super, grazie! Ho appena letto le istruzioni per la raccolta differenziata. Se avrò bisogno di asciugamani extra vi scriverò. Grazie per i consigli su cosa visitare in città.'
      }
    ]
  },
  sophie: {
    id: 'sophie',
    bookingCode: 'DEMO-1051',
    bookingStatus: 'Da leggere · Check-in Oggi',
    guestName: 'Sophie Laurent',
    dates: '07/10/26 – 10/10/26',
    unit: 'Suite Brera · S02',
    langCode: 'FR',
    langName: 'Francese',
    channel: 'BOOKING.COM',
    msgCount: 4,
    handover: {
      motivo: 'Richiesta deposito bagagli anticipato ore 11:30',
      urgenza: 'Alta · Arrivo tra 2 ore',
      sentiment: 'Cordiale',
      statoAI: 'Bozza pronta da KB (91%)'
    },
    tags: ['#EarlyCheckIn', '#Bagagli', '#CodiciAccesso'],
    standardDraftIT: 'Ciao Sophie! Puoi lasciare i bagagli già dalle 11:30 negli armadietti smart al piano terra usando il codice 4490. Appena la camera sarà pronta ti avviseremo qui.',
    standardDraftTarget: 'Bonjour Sophie ! Vous pouvez déposer vos bagages dès 11h30 dans les casiers intelligents au rez-de-chaussée avec le code 4490. Dès que la chambre sera prête, nous vous préviendrons ici.',
    focusDraftIT: 'Ciao Sophie, benvenuta a Milano!\n\nPuoi lasciare comodamente i bagagli già dalle 11:30 negli armadietti smart al piano terra (Locker n. 2 e n. 3) inserendo il codice 4490.\n\nIl nostro team di pulizie darà priorità alla tua Suite Brera e ti invieremo un messaggio non appena sarà pronta per il check-in anticipato.',
    focusDraftTarget: 'Bonjour Sophie, bienvenue à Milan !\n\nVous pouvez déposer vos bagages dès 11h30 dans les casiers intelligents du rez-de-chaussée (Casiers n°2 et n°3) en tapant le code 4490.\n\nNotre équipe de ménage donnera la priorité à votre Suite Brera et nous vous enverrons un message dès qu’elle sera prête.',
    messages: [
      {
        id: 's1',
        sender: 'guest',
        author: 'SOPHIE · 10:15',
        badges: [
          { text: 'BOOKING.COM', cls: 'booking' },
          { text: 'FR -> IT', cls: 'ai' }
        ],
        textOriginal: 'Bonjour ! Notre train arrive à Milan à 11h15. Est-il possible de déposer nos valises avant l’heure officielle du check-in ?',
        textTranslated: "Buongiorno! Il nostro treno arriva a Milano alle 11:15. È possibile lasciare le valigie prima dell'orario ufficiale di check-in?"
      }
    ]
  },
  francesco: {
    id: 'francesco',
    bookingCode: 'DEMO-1042',
    bookingStatus: 'Chiusa · Check-out effettuato',
    guestName: 'Francesco Ira',
    dates: '02/10/26 – 06/10/26',
    unit: 'Casa Aurora · Attico',
    langCode: 'EN',
    langName: 'Inglese',
    channel: 'WHATSAPP',
    msgCount: 6,
    handover: {
      motivo: 'Invio ricevuta tassa di soggiorno e ringraziamenti',
      urgenza: 'Bassa · Post soggiorno',
      sentiment: 'Eccellente (5 stelle)',
      statoAI: 'Completato'
    },
    tags: ['#Fattura', '#Check-out', '#Recensione'],
    standardDraftIT: 'Ciao Francesco, grazie ancora per essere stato nostro ospite! Trovi in allegato la ricevuta richiesta. Ti aspettiamo presto a Casa Aurora!',
    standardDraftTarget: 'Hi Francesco, thank you again for staying with us! Please find attached the requested receipt. We look forward to welcoming you back to Casa Aurora soon!',
    focusDraftIT: 'Ciao Francesco, grazie mille per aver soggiornato a Casa Aurora!\n\nTi abbiamo allegato qui la ricevuta completa della tassa di soggiorno e del pernottamento.\n\nSe hai piacere di lasciarci una recensione, per noi è davvero preziosa. A presto!',
    focusDraftTarget: 'Hi Francesco, thank you so much for staying at Casa Aurora!\n\nWe have attached the full receipt for your stay and city tax.\n\nIf you would like to leave us a review, it means a lot to our team. See you soon!',
    messages: [
      {
        id: 'f1',
        sender: 'guest',
        author: 'FRANCESCO · Ieri 18:20',
        badges: [
          { text: 'WHATSAPP', cls: 'pms' }
        ],
        textOriginal: 'Grazie di tutto ragazzi, soggiorno impeccabile! Potete girarmi la ricevuta della tassa di soggiorno quando avete un attimo?',
        textTranslated: 'Messaggio già in Italiano (nessuna traduzione necessaria).'
      }
    ]
  }
};

let state = {
  activeConvId: 'adam',
  focusExpanded: false,
  channelMode: 'guest',
  rightTab: 'ai',
  demoStageMode: 'desktop-standard',
  editingTranslation: false,
  promptOpen: false,
  leftCollapsed: false,
  rightCollapsed: false
};

function getConv() {
  return CONVERSATIONS[state.activeConvId];
}

function setDemoStageMode(mode) {
  state.demoStageMode = mode;
  document.querySelectorAll('.demo-mode-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  const stage = document.getElementById('demoStage');
  if (mode === 'mobile-overview') {
    stage.classList.add('mobile-stage-active');
  } else {
    stage.classList.remove('mobile-stage-active');
    if (mode === 'desktop-focus') {
      state.focusExpanded = true;
      state.rightTab = 'kb';
    } else if (mode === 'desktop-standard') {
      state.focusExpanded = false;
      state.rightTab = 'ai';
    }
    syncAllUI();
  }
}

function selectConversation(convId) {
  state.activeConvId = convId;
  document.querySelectorAll('.conv-item').forEach(el => {
    el.classList.toggle('active', el.dataset.conv === convId);
  });
  syncAllUI();
}

function toggleFocusView() {
  state.focusExpanded = !state.focusExpanded;
  state.demoStageMode = state.focusExpanded ? 'desktop-focus' : 'desktop-standard';
  document.querySelectorAll('.demo-mode-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === state.demoStageMode);
  });
  syncAllUI();
}

function setChannelMode(mode) {
  state.channelMode = mode;
  syncAllUI();
}

function setRightTab(tab) {
  state.rightTab = tab;
  syncAllUI();
}

function toggleLeftSidebar() {
  state.leftCollapsed = !state.leftCollapsed;
  document.getElementById('inboxPanel').classList.toggle('collapsed', state.leftCollapsed);
}

function toggleRightSidebar() {
  state.rightCollapsed = !state.rightCollapsed;
  document.getElementById('aiSidebar').classList.toggle('collapsed', state.rightCollapsed);
}

function togglePromptBar() {
  state.promptOpen = !state.promptOpen;
  document.getElementById('promptInlineBar').classList.toggle('open', state.promptOpen);
  if (state.promptOpen) {
    document.getElementById('promptInput').focus();
  }
}

function applyAiPrompt() {
  const promptVal = document.getElementById('promptInput').value.trim();
  const itArea = document.getElementById('composerTextarea');
  const plArea = document.getElementById('translationPreviewTextarea');
  if (!promptVal) return;
  itArea.value = itArea.value + "\n\n[Modifica AI applicata: " + promptVal + "] Restiamo a tua completa disposizione su WhatsApp o qui in chat!";
  plArea.value = plArea.value + "\n\n[AI: " + promptVal + "] Jesteśmy do Twojej dyspozycji na WhatsAppie lub tutaj na czacie!";
  document.getElementById('promptInput').value = '';
  state.promptOpen = false;
  document.getElementById('promptInlineBar').classList.remove('open');
  flashSyncBadge('Aggiornata con Prompt AI');
}

function insertProposal(type) {
  const conv = getConv();
  const itArea = document.getElementById('composerTextarea');
  const plArea = document.getElementById('translationPreviewTextarea');
  if (type === 'full') {
    state.focusExpanded = true;
    itArea.value = conv.focusDraftIT;
    plArea.value = conv.focusDraftTarget;
  } else if (type === 'short') {
    itArea.value = conv.standardDraftIT;
    plArea.value = conv.standardDraftTarget;
  } else if (type === 'kb-parking') {
    itArea.value = "Ciao " + conv.guestName.split(' ')[0] + "! Il posto auto riservato è il n. 14 nel cortile interno. Il cancello automatico si apre con il codice 000000.";
    plArea.value = "Cześć! Dedykowane miejsce parkingowe to nr 14 na wewnętrznym dziedzińcu. Brama otwiera się kodem 000000.";
  } else if (type === 'kb-towels') {
    itArea.value = "Per il set di asciugamani extra, scrivici pure qui l'orario che preferisci e la governante te li consegnerà in 30 minuti.";
    plArea.value = "W sprawie dodatkowych ręczników napisz, która godzina Ci odpowiada, a dostarczymy je w 30 minut.";
  } else if (type === 'sched-checkin') {
    itArea.value = "Ciao! Ti confermiamo che il self check-in è attivo dalle ore 15:00 con il codice Nuki 000000.";
    plArea.value = "Cześć! Potwierdzamy, że zameldowanie samodzielne jest aktywne od 15:00 z kodem Nuki 000000.";
  }
  syncAllUI(true);
  flashSyncBadge('Bozza inserita e tradotta');
}

function handleItalianInput() {
  const itText = document.getElementById('composerTextarea').value;
  const plArea = document.getElementById('translationPreviewTextarea');
  const syncText = document.getElementById('syncStatusText');
  syncText.textContent = 'Traduzione live...';

  clearTimeout(window.__transTimer);
  window.__transTimer = setTimeout(() => {
    const conv = getConv();
    if (itText.trim() === conv.standardDraftIT.trim()) {
      plArea.value = conv.standardDraftTarget;
    } else if (itText.trim() === conv.focusDraftIT.trim()) {
      plArea.value = conv.focusDraftTarget;
    } else {
      plArea.value = state.focusExpanded
        ? conv.focusDraftTarget
        : conv.standardDraftTarget + (itText.length > conv.standardDraftIT.length ? ' [Zaktualizowano na żywo]' : '');
    }
    syncText.textContent = 'Sincronizzata';
  }, 280);
}

function toggleEditTranslation() {
  state.editingTranslation = !state.editingTranslation;
  const plArea = document.getElementById('translationPreviewTextarea');
  const btn = document.getElementById('btnEditPl');
  plArea.readOnly = !state.editingTranslation;
  btn.classList.toggle('editing', state.editingTranslation);
  btn.textContent = state.editingTranslation ? 'Salva ' + getConv().langCode : ('Modifica ' + getConv().langCode);
  if (state.editingTranslation) {
    plArea.focus();
  }
}

function flashSyncBadge(msg) {
  const syncText = document.getElementById('syncStatusText');
  if (!syncText) return;
  syncText.textContent = msg;
  setTimeout(() => {
    syncText.textContent = 'Sincronizzata';
  }, 1800);
}

function sendCurrentMessage(scheduledTime = null) {
  const conv = getConv();
  const itArea = document.getElementById('composerTextarea');
  const plArea = document.getElementById('translationPreviewTextarea');
  const itText = itArea.value.trim();
  const targetText = plArea.value.trim();
  if (!itText) return;

  if (state.channelMode === 'note') {
    conv.messages.push({
      id: 'm_' + Date.now(),
      sender: 'host',
      internalNote: true,
      author: 'TU · Nota Interna Team · Ora',
      badges: [{ text: 'NOTA INTERNA PRIVATA', cls: 'channel' }],
      textOriginal: itText,
      textTranslated: ''
    });
  } else if (scheduledTime) {
    conv.messages.push({
      id: 'm_' + Date.now(),
      sender: 'host',
      scheduled: true,
      author: 'TU · Programmato per ' + scheduledTime,
      badges: [
        { text: 'PROGRAMMATO', cls: 'channel' },
        { text: 'TRADOTTO IN ' + conv.langCode, cls: 'pms' }
      ],
      textOriginal: targetText || itText,
      textTranslated: 'Testo originale (IT): ' + itText
    });
  } else {
    conv.messages.push({
      id: 'm_' + Date.now(),
      sender: 'host',
      author: 'TU · Inviato ora',
      badges: [
        { text: 'INVIATO IN ' + conv.langCode, cls: 'pms' },
        { text: 'DOPPIA VERIFICA OK', cls: 'booking' }
      ],
      textOriginal: targetText || itText,
      textTranslated: 'Testo originale (IT): ' + itText
    });
  }

  conv.msgCount = conv.messages.length;
  renderMessages();
  const stream = document.getElementById('messagesStream');
  stream.scrollTop = stream.scrollHeight;
  flashSyncBadge(scheduledTime ? 'Messaggio programmato!' : 'Messaggio inviato!');
}

function openScheduleModal() {
  document.getElementById('scheduleModal').classList.add('open');
}

function closeScheduleModal() {
  document.getElementById('scheduleModal').classList.remove('open');
}

function confirmScheduleMessage(presetLabel) {
  const customInput = document.getElementById('scheduleCustomTime').value;
  const label = presetLabel || customInput || 'Domani ore 08:30';
  closeScheduleModal();
  sendCurrentMessage(label);
}

function deleteScheduledMsg(msgId) {
  const conv = getConv();
  conv.messages = conv.messages.filter(m => m.id !== msgId);
  renderMessages();
}

function renderMessages() {
  const conv = getConv();
  const stream = document.getElementById('messagesStream');
  stream.innerHTML = conv.messages.map(m => {
    const rowCls = ['msg-row', m.sender, m.scheduled ? 'scheduled' : '', m.internalNote ? 'internal-note' : ''].filter(Boolean).join(' ');
    const badgesHtml = (m.badges || []).map(b => `<span class="mini-badge ${b.cls}">${b.text}</span>`).join('');
    const transHtml = m.textTranslated ? `
      <div class="msg-translation-card">
        <div class="msg-translation-header">
          <span>${m.sender === 'guest' ? `Traduzione automatica (${conv.langCode} -> IT)` : 'Originale scritto in Italiano'}</span>
          <span>Sincronizzata</span>
        </div>
        <div class="msg-translation-body">${m.textTranslated}</div>
      </div>
    ` : '';
    const actionsHtml = m.scheduled ? `
      <div class="msg-actions-bar">
        <button class="msg-action-tiny" onclick="sendCurrentMessage()">Invia subito</button>
        <button class="msg-action-tiny danger" onclick="deleteScheduledMsg('${m.id}')">Annulla programmazione</button>
      </div>
    ` : '';
    return `
      <div class="${rowCls}">
        <div class="msg-meta">
          <span>${m.author}</span>
          ${badgesHtml}
        </div>
        <div class="msg-bubble">${m.textOriginal}</div>
        ${transHtml}
        ${actionsHtml}
      </div>
    `;
  }).join('');
}

function syncAllUI(preserveText = false) {
  const conv = getConv();

  document.getElementById('threadGuestName').textContent = conv.guestName;
  document.getElementById('threadMsgCount').textContent = conv.msgCount;
  document.getElementById('threadStayDates').textContent = `${conv.dates} · ${conv.unit}`;
  document.getElementById('threadLangChip').textContent = `Lingua ospite: ${conv.langCode} (${conv.langName})`;

  document.getElementById('hoMotivo').textContent = conv.handover.motivo;
  document.getElementById('hoUrgenza').textContent = conv.handover.urgenza;
  document.getElementById('hoSentiment').textContent = conv.handover.sentiment;
  document.getElementById('hoStato').textContent = conv.handover.statoAI;

  const card = document.getElementById('composerCard');
  card.classList.toggle('focus-expanded', state.focusExpanded);
  card.classList.toggle('note-mode', state.channelMode === 'note');

  const focusBtn = document.getElementById('focusToggleBtn');
  focusBtn.classList.toggle('active', state.focusExpanded);
  focusBtn.innerHTML = state.focusExpanded
    ? '<span>⤡</span><span>Riduci vista</span>'
    : '<span>⤢</span><span>Espandi vista</span>';

  document.getElementById('tabChannelGuest').classList.toggle('active', state.channelMode === 'guest');
  document.getElementById('tabChannelNote').classList.toggle('active', state.channelMode === 'note');

  const sendBtn = document.getElementById('mainSendBtn');
  sendBtn.innerHTML = state.channelMode === 'note'
    ? '<span>Salva nota interna</span>'
    : `<span>Invia in ${conv.langName} (${conv.langCode})</span><span style="background:#1D4ED8;color:#DBEAFE;padding:1px 5px;border-radius:4px;font-size:10px;font-weight:500;">⌘↵</span>`;

  const itArea = document.getElementById('composerTextarea');
  const plArea = document.getElementById('translationPreviewTextarea');
  if (!preserveText) {
    itArea.value = state.focusExpanded ? conv.focusDraftIT : conv.standardDraftIT;
    plArea.value = state.focusExpanded ? conv.focusDraftTarget : conv.standardDraftTarget;
  }

  document.getElementById('rightTabAi').classList.toggle('active', state.rightTab === 'ai');
  document.getElementById('rightTabKb').classList.toggle('active', state.rightTab === 'kb');
  document.getElementById('rightContentAi').style.display = state.rightTab === 'ai' ? 'flex' : 'none';
  document.getElementById('rightContentKb').style.display = state.rightTab === 'kb' ? 'flex' : 'none';

  document.getElementById('langSelectDropdown').value = conv.langCode;
  document.getElementById('btnEditPl').textContent = state.editingTranslation ? 'Salva' : `Modifica ${conv.langCode}`;
  document.getElementById('aiSidebar').classList.toggle('composer-Expanded-sync', state.focusExpanded);

  renderMessages();
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 900) {
    state.leftCollapsed = true;
    state.rightCollapsed = true;
    document.getElementById('inboxPanel').classList.add('collapsed');
    document.getElementById('aiSidebar').classList.add('collapsed');
  }
  syncAllUI();
});
