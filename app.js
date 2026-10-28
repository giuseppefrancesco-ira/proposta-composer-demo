const CONVERSATIONS = {
  adam: {
    id: 'adam',
    bookingCode: 'DEMO-1048',
    bookingStatus: 'Aperta - Soggiorno in corso',
    guestName: 'Adam Nowak',
    dates: '06/10/26 - 11/10/26',
    unit: 'App. Duomo Suite - S04',
    langCode: 'EN',
    langName: 'Inglese',
    channel: 'AIRBNB',
    msgCount: 9,
    handover: {
      motivo: 'Richiesta posto auto cortile + biancheria extra',
      urgenza: 'Media - Ospite in struttura',
      sentiment: 'Positivo (Codice Nuki OK)',
      statoAI: 'Bozza pronta da KB (94%)'
    },
    pinnedQuestions: [
      { time: '11:20 - Parcheggio', text: '"Il codice Nuki funziona! C\'è un posto auto riservato nel cortile?"' },
      { time: '11:45 - Biancheria Extra', text: '"Super, grazie! Se avrò bisogno di asciugamani vi scriverò."' }
    ],
    tags: ['#Parcheggio', '#Check-in', '#Biancheria', '#AccessoCodice'],
    standardDraftIT: 'Ciao Adam, grazie! Per il parcheggio trovi il posto auto n. 14 nel cortile interno, per aprire il cancello puoi usare lo stesso codice 000000. Per gli asciugamani extra scrivici pure qui quando vuoi e te li portiamo subito.',
    standardDraftTarget: 'Hi Adam, thank you! For parking, spot #14 is reserved for you in the inner courtyard - you can open the gate using the same code 000000. For extra towels, just message us here anytime and we will bring them right over.',
    focusDraftIT: "Ciao Adam, siamo felici che il codice abbia funzionato subito e che ti stia trovando bene!\n\nPer il parcheggio puoi usare il posto auto n. 14 nel cortile interno: il cancello automatico si apre con lo stesso codice 000000 sulla tastiera esterna.\n\nSe ti serviranno altri asciugamani scrivici pure qui e te li faremo avere in appartamento in mezz'ora. Ti ricordiamo solo che domenica il check-out è entro le 10:30 e potrai lasciare le chiavi sul tavolo. A presto!",
    focusDraftTarget: "Hi Adam, we are glad the code worked right away and that you are enjoying the apartment!\n\nFor parking, you can use spot #14 in the inner courtyard: the automatic gate opens with the same code 000000 on the external keypad.\n\nIf you need extra towels, just message us here and we will deliver them to your apartment within 30 minutes. Just a quick reminder that Sunday check-out is by 10:30 AM and you can leave the keys on the table. See you soon!",
    messages: [
      {
        id: 'm1',
        sender: 'guest',
        author: 'ADAM - 11:20',
        badges: [
          { text: 'AIRBNB', cls: 'channel' },
          { text: 'EN -> IT', cls: 'booking' }
        ],
        textOriginal: 'Good morning! The Nuki code worked right away, the apartment is great. Quick question: is there a dedicated parking spot in the courtyard for guests?',
        textTranslated: "Buongiorno! Il codice Nuki ha funzionato subito, l'appartamento è ottimo. Ho una domanda: nel cortile c'è un posto auto riservato per gli ospiti?"
      },
      {
        id: 'm2',
        sender: 'host',
        scheduled: true,
        author: 'TU - Programmato per Domani 09:00',
        badges: [
          { text: 'PROGRAMMATO', cls: 'channel' },
          { text: 'TEMPLATE CHECK-OUT', cls: 'ai' },
          { text: 'DOPPIA VERIFICA OK', cls: 'pms' }
        ],
        textOriginal: 'Good morning Adam! Just a friendly reminder that check-out tomorrow is by 10:30 AM. You can leave the keys on the living room table.',
        textTranslated: 'Testo originale (IT): Buongiorno Adam! Ti ricordiamo che domani il check-out è previsto entro le 10:30. Puoi lasciare le chiavi sul tavolo in soggiorno.'
      },
      {
        id: 'm3',
        sender: 'guest',
        author: 'ADAM - 11:45',
        badges: [
          { text: 'AIRBNB', cls: 'channel' },
          { text: 'EN -> IT', cls: 'booking' },
          { text: 'SENTIMENT POSITIVO', cls: 'pms' }
        ],
        textOriginal: 'Great, thank you! I just read the recycling instructions. If I need extra towels I will message you here. Thanks for the city sightseeing tips!',
        textTranslated: 'Super, grazie! Ho appena letto le istruzioni per la raccolta differenziata. Se avrò bisogno di asciugamani extra vi scriverò. Grazie per i consigli su cosa visitare in città.'
      }
    ]
  },
  sophie: {
    id: 'sophie',
    bookingCode: 'DEMO-1051',
    bookingStatus: 'Da leggere - Check-in Oggi',
    guestName: 'Sophie Laurent',
    dates: '07/10/26 - 10/10/26',
    unit: 'Suite Brera - S02',
    langCode: 'EN',
    langName: 'Inglese',
    channel: 'BOOKING.COM',
    msgCount: 4,
    handover: {
      motivo: 'Richiesta deposito bagagli anticipato ore 11:30',
      urgenza: 'Alta - Arrivo tra 2 ore',
      sentiment: 'Cordiale',
      statoAI: 'Bozza pronta da KB (91%)'
    },
    pinnedQuestions: [
      { time: '10:15 - Deposito Bagagli', text: '"Il nostro treno arriva alle 11:15. È possibile lasciare le valigie prima del check-in?"' }
    ],
    tags: ['#EarlyCheckIn', '#Bagagli', '#CodiciAccesso'],
    standardDraftIT: 'Ciao Sophie! Puoi lasciare i bagagli già dalle 11:30 negli armadietti smart al piano terra usando il codice 4490. Appena la camera sarà pronta ti avviseremo qui.',
    standardDraftTarget: 'Hi Sophie! You can drop off your luggage starting at 11:30 AM in the smart lockers on the ground floor using code 4490. As soon as your room is ready, we will let you know right here.',
    focusDraftIT: 'Ciao Sophie, benvenuta a Milano!\n\nPuoi lasciare comodamente i bagagli già dalle 11:30 negli armadietti smart al piano terra (Locker n. 2 e n. 3) inserendo il codice 4490.\n\nIl nostro team di pulizie darà priorità alla tua Suite Brera e ti invieremo un messaggio non appena sarà pronta per il check-in anticipato.',
    focusDraftTarget: 'Hi Sophie, welcome to Milan!\n\nYou can comfortably leave your luggage starting at 11:30 AM in the ground-floor smart lockers (Lockers #2 and #3) by entering code 4490.\n\nOur housekeeping team will prioritize your Brera Suite and we will message you as soon as it is ready for early check-in.',
    messages: [
      {
        id: 's1',
        sender: 'guest',
        author: 'SOPHIE - 10:15',
        badges: [
          { text: 'BOOKING.COM', cls: 'booking' },
          { text: 'EN -> IT', cls: 'ai' }
        ],
        textOriginal: 'Hello! Our train arrives in Milan at 11:15 AM. Would it be possible to drop off our luggage before the official check-in time?',
        textTranslated: "Buongiorno! Il nostro treno arriva a Milano alle 11:15. È possibile lasciare le valigie prima dell'orario ufficiale di check-in?"
      }
    ]
  },
  francesco: {
    id: 'francesco',
    bookingCode: 'DEMO-1042',
    bookingStatus: 'Chiusa - Check-out effettuato',
    guestName: 'Francesco Ira',
    dates: '02/10/26 - 06/10/26',
    unit: 'Casa Aurora - Attico',
    langCode: 'EN',
    langName: 'Inglese',
    channel: 'WHATSAPP',
    msgCount: 6,
    handover: {
      motivo: 'Invio ricevuta tassa di soggiorno e ringraziamenti',
      urgenza: 'Bassa - Post soggiorno',
      sentiment: 'Eccellente (5 stelle)',
      statoAI: 'Completato'
    },
    pinnedQuestions: [
      { time: 'Ieri 18:20 - Ricevuta', text: '"Soggiorno impeccabile! Potete girarmi la ricevuta della tassa di soggiorno?"' }
    ],
    tags: ['#Fattura', '#Check-out', '#Recensione'],
    standardDraftIT: 'Ciao Francesco, grazie ancora per essere stato nostro ospite! Trovi in allegato la ricevuta richiesta. Ti aspettiamo presto a Casa Aurora!',
    standardDraftTarget: 'Hi Francesco, thank you again for staying with us! Please find attached the requested receipt. We look forward to welcoming you back to Casa Aurora soon!',
    focusDraftIT: 'Ciao Francesco, grazie mille per aver soggiornato a Casa Aurora!\n\nTi abbiamo allegato qui la ricevuta completa della tassa di soggiorno e del pernottamento.\n\nSe hai piacere di lasciarci una recensione, per noi è davvero preziosa. A presto!',
    focusDraftTarget: 'Hi Francesco, thank you so much for staying at Casa Aurora!\n\nWe have attached the full receipt for your stay and city tax.\n\nIf you would like to leave us a review, it means a lot to our team. See you soon!',
    messages: [
      {
        id: 'f1',
        sender: 'guest',
        author: 'FRANCESCO - Ieri 18:20',
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
  editingTranslation: false,
  promptOpen: false,
  leftCollapsed: window.innerWidth <= 900,
  rightCollapsed: window.innerWidth <= 900,
  wasMobile: window.innerWidth <= 900
};

function isMobileViewport() {
  return window.innerWidth <= 900;
}

function getConv() {
  return CONVERSATIONS[state.activeConvId];
}

function syncDrawerBackdrop() {
  const backdrop = document.getElementById('mobileBackdrop');
  if (!backdrop) return;
  const anyDrawerOpenOnMobile = isMobileViewport() && (!state.leftCollapsed || !state.rightCollapsed);
  backdrop.classList.toggle('open', anyDrawerOpenOnMobile);
}

function closeMobileDrawers() {
  if (!isMobileViewport()) return;
  state.leftCollapsed = true;
  state.rightCollapsed = true;
  document.getElementById('inboxPanel').classList.add('collapsed');
  document.getElementById('aiSidebar').classList.add('collapsed');
  syncDrawerBackdrop();
}

function selectConversation(convId) {
  state.activeConvId = convId;
  document.querySelectorAll('.conv-item').forEach(el => {
    el.classList.toggle('active', el.dataset.conv === convId);
  });
  if (isMobileViewport()) {
    closeMobileDrawers();
  }
  syncAllUI();
}

function toggleFocusView() {
  state.focusExpanded = !state.focusExpanded;
  if (!isMobileViewport()) {
    state.rightTab = state.focusExpanded ? 'kb' : 'ai';
  }
  syncAllUI();
}

function setChannelMode(mode) {
  state.channelMode = mode;
  syncAllUI(true);
}

function setRightTab(tab) {
  state.rightTab = tab;
  if (isMobileViewport() && state.rightCollapsed) {
    state.rightCollapsed = false;
    state.leftCollapsed = true;
    document.getElementById('inboxPanel').classList.add('collapsed');
    document.getElementById('aiSidebar').classList.remove('collapsed');
    syncDrawerBackdrop();
  }
  syncAllUI(true);
}

function toggleLeftSidebar() {
  state.leftCollapsed = !state.leftCollapsed;
  if (isMobileViewport() && !state.leftCollapsed) {
    state.rightCollapsed = true;
    document.getElementById('aiSidebar').classList.add('collapsed');
  }
  document.getElementById('inboxPanel').classList.toggle('collapsed', state.leftCollapsed);
  syncDrawerBackdrop();
}

function toggleRightSidebar() {
  state.rightCollapsed = !state.rightCollapsed;
  if (isMobileViewport() && !state.rightCollapsed) {
    state.leftCollapsed = true;
    document.getElementById('inboxPanel').classList.add('collapsed');
  }
  document.getElementById('aiSidebar').classList.toggle('collapsed', state.rightCollapsed);
  syncDrawerBackdrop();
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
  const enArea = document.getElementById('translationPreviewTextarea');
  if (!promptVal) return;
  itArea.value = itArea.value + "\n\n[Modifica AI applicata: " + promptVal + "] Restiamo a tua completa disposizione su WhatsApp o qui in chat!";
  enArea.value = enArea.value + "\n\n[AI update: " + promptVal + "] We remain at your full disposal on WhatsApp or right here in the chat!";
  document.getElementById('promptInput').value = '';
  state.promptOpen = false;
  document.getElementById('promptInlineBar').classList.remove('open');
  flashSyncBadge('Aggiornata con Prompt AI');
}

function insertProposal(type) {
  const conv = getConv();
  const itArea = document.getElementById('composerTextarea');
  const enArea = document.getElementById('translationPreviewTextarea');
  if (type === 'full') {
    state.focusExpanded = true;
    itArea.value = conv.focusDraftIT;
    enArea.value = conv.focusDraftTarget;
  } else if (type === 'short') {
    itArea.value = conv.standardDraftIT;
    enArea.value = conv.standardDraftTarget;
  } else if (type === 'kb-parking') {
    itArea.value = "Ciao " + conv.guestName.split(' ')[0] + "! Il posto auto riservato è il n. 14 nel cortile interno. Il cancello automatico si apre con il codice 000000.";
    enArea.value = "Hi " + conv.guestName.split(' ')[0] + "! Reserved parking spot #14 is in the inner courtyard. The automatic gate opens with code 000000.";
  } else if (type === 'kb-towels') {
    itArea.value = "Per il set di asciugamani extra, scrivici pure qui l'orario che preferisci e la governante te li consegnerà in 30 minuti.";
    enArea.value = "For the extra towel set, just let us know your preferred time here and housekeeping will deliver them within 30 minutes.";
  } else if (type === 'sched-checkin') {
    itArea.value = "Ciao! Ti confermiamo che il self check-in è attivo dalle ore 15:00 con il codice Nuki 000000.";
    enArea.value = "Hi! We confirm that self check-in is active from 3:00 PM using Nuki code 000000.";
  }
  if (isMobileViewport()) {
    closeMobileDrawers();
  }
  syncAllUI(true);
  flashSyncBadge('Bozza inserita e tradotta');
}

function handleItalianInput() {
  const itText = document.getElementById('composerTextarea').value;
  const enArea = document.getElementById('translationPreviewTextarea');
  const syncText = document.getElementById('syncStatusText');
  syncText.textContent = 'Traduzione live...';

  clearTimeout(window.__transTimer);
  window.__transTimer = setTimeout(() => {
    const conv = getConv();
    if (itText.trim() === conv.standardDraftIT.trim()) {
      enArea.value = conv.standardDraftTarget;
    } else if (itText.trim() === conv.focusDraftIT.trim()) {
      enArea.value = conv.focusDraftTarget;
    } else {
      enArea.value = state.focusExpanded
        ? conv.focusDraftTarget
        : conv.standardDraftTarget + (itText.length > conv.standardDraftIT.length ? ' [Live translated]' : '');
    }
    syncText.textContent = 'Sincronizzata';
  }, 280);
}

function toggleEditTranslation() {
  state.editingTranslation = !state.editingTranslation;
  const enArea = document.getElementById('translationPreviewTextarea');
  const btn = document.getElementById('btnEditPl');
  enArea.readOnly = !state.editingTranslation;
  btn.classList.toggle('editing', state.editingTranslation);
  btn.textContent = state.editingTranslation ? 'Salva ' + getConv().langCode : ('Modifica ' + getConv().langCode);
  if (state.editingTranslation) {
    enArea.focus();
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
  const enArea = document.getElementById('translationPreviewTextarea');
  const itText = itArea.value.trim();
  const targetText = enArea.value.trim();
  if (!itText) return;

  if (state.channelMode === 'note') {
    conv.messages.push({
      id: 'm_' + Date.now(),
      sender: 'host',
      internalNote: true,
      author: 'TU - Nota Interna Team - Ora',
      badges: [{ text: 'NOTA INTERNA PRIVATA', cls: 'channel' }],
      textOriginal: itText,
      textTranslated: ''
    });
  } else if (scheduledTime) {
    conv.messages.push({
      id: 'm_' + Date.now(),
      sender: 'host',
      scheduled: true,
      author: 'TU - Programmato per ' + scheduledTime,
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
      author: 'TU - Inviato ora',
      badges: [
        { text: 'INVIATO IN ' + conv.langCode, cls: 'pms' },
        { text: 'DOPPIA VERIFICA OK', cls: 'booking' }
      ],
      textOriginal: targetText || itText,
      textTranslated: 'Testo originale (IT): ' + itText
    });
  }

  conv.msgCount = conv.messages.length;
  if (isMobileViewport() && state.focusExpanded) {
    state.focusExpanded = false;
  }
  syncAllUI(true);
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

  const mobileHandoverHtml = `
    <div class="mobile-handover-inline">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:10.5px;font-weight:700;color:var(--brand);letter-spacing:0.2px;">PASSAGGIO CONSEGNE &amp; SINTESI</span>
        <span class="mini-badge pms">4 punti chiave</span>
      </div>
      <div style="font-size:11.5px;color:var(--text-secondary);line-height:1.45;">
        <strong>1. Motivo:</strong> ${conv.handover.motivo}<br/>
        <strong>2. Priorit&agrave;:</strong> ${conv.handover.urgenza} &middot; <strong>3. Sentiment:</strong> ${conv.handover.sentiment}
      </div>
    </div>
  `;

  const messagesHtml = conv.messages.map(m => {
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

  stream.innerHTML = mobileHandoverHtml + messagesHtml;
}

function syncAllUI(preserveText = false) {
  const conv = getConv();
  const mobile = isMobileViewport();

  document.getElementById('threadGuestName').textContent = conv.guestName;
  document.getElementById('threadGuestSubMobile').textContent = `${conv.dates} - ${conv.unit}`;
  document.getElementById('threadMsgCount').textContent = conv.msgCount;
  document.getElementById('mobileMsgCount').textContent = conv.msgCount;
  document.getElementById('mobileLangBadge').textContent = `${conv.langCode} -> IT`;
  document.getElementById('threadStayDates').textContent = `${conv.dates} - ${conv.unit}`;
  document.getElementById('threadLangChip').textContent = `Lingua ospite: ${conv.langCode} (${conv.langName})`;

  document.getElementById('hoMotivo').textContent = conv.handover.motivo;
  document.getElementById('hoUrgenza').textContent = conv.handover.urgenza;
  document.getElementById('hoSentiment').textContent = conv.handover.sentiment;
  document.getElementById('hoStato').textContent = conv.handover.statoAI;

  const pinnedChannelBadge = document.getElementById('mobilePinnedChannelBadge');
  if (pinnedChannelBadge) {
    pinnedChannelBadge.textContent = `${conv.channel} - ${conv.langCode}->IT`;
  }
  const pinnedCard = document.getElementById('mobilePinnedContextCard');
  if (pinnedCard) {
    pinnedCard.innerHTML = (conv.pinnedQuestions || []).map((q, idx) => `
      <div style="${idx > 0 ? 'border-top:1px solid #F1F5F9;padding-top:5px;' : ''}">
        <span style="font-size:10px;font-weight:700;color:var(--brand);margin-right:4px;">${q.time}</span>
        <span>${q.text}</span>
      </div>
    `).join('');
  }

  const threadCol = document.getElementById('threadColumn');
  threadCol.classList.toggle('mobile-focus-mode', mobile && state.focusExpanded);

  const card = document.getElementById('composerCard');
  card.classList.toggle('focus-expanded', state.focusExpanded);
  card.classList.toggle('note-mode', state.channelMode === 'note');

  const focusBtn = document.getElementById('focusToggleBtn');
  focusBtn.classList.toggle('active', state.focusExpanded);
  focusBtn.innerHTML = state.focusExpanded
    ? '<span>Riduci vista</span>'
    : '<span>Espandi</span>';

  document.getElementById('tabChannelGuest').classList.toggle('active', state.channelMode === 'guest');
  document.getElementById('tabChannelNote').classList.toggle('active', state.channelMode === 'note');

  const sendBtn = document.getElementById('mainSendBtn');
  if (state.channelMode === 'note') {
    sendBtn.innerHTML = '<span>Salva nota interna</span>';
  } else if (mobile) {
    sendBtn.innerHTML = `<span>Invia in ${conv.langCode}</span>`;
  } else {
    sendBtn.innerHTML = `<span>Invia in ${conv.langName} (${conv.langCode})</span>`;
  }

  const itArea = document.getElementById('composerTextarea');
  const enArea = document.getElementById('translationPreviewTextarea');
  if (!preserveText) {
    itArea.value = state.focusExpanded ? conv.focusDraftIT : conv.standardDraftIT;
    enArea.value = state.focusExpanded ? conv.focusDraftTarget : conv.standardDraftTarget;
  }

  document.getElementById('rightTabAi').classList.toggle('active', state.rightTab === 'ai');
  document.getElementById('rightTabKb').classList.toggle('active', state.rightTab === 'kb');
  document.getElementById('rightContentAi').style.display = state.rightTab === 'ai' ? 'flex' : 'none';
  document.getElementById('rightContentKb').style.display = state.rightTab === 'kb' ? 'flex' : 'none';

  document.getElementById('langSelectDropdown').value = conv.langCode;
  document.getElementById('btnEditPl').textContent = state.editingTranslation ? 'Salva' : `Modifica ${conv.langCode}`;

  renderMessages();
}

window.addEventListener('resize', () => {
  const nowMobile = isMobileViewport();
  if (nowMobile !== state.wasMobile) {
    state.wasMobile = nowMobile;
    if (nowMobile) {
      state.leftCollapsed = true;
      state.rightCollapsed = true;
    } else {
      state.leftCollapsed = false;
      state.rightCollapsed = false;
    }
    document.getElementById('inboxPanel').classList.toggle('collapsed', state.leftCollapsed);
    document.getElementById('aiSidebar').classList.toggle('collapsed', state.rightCollapsed);
    syncDrawerBackdrop();
  }
  syncAllUI(true);
});

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('inboxPanel').classList.toggle('collapsed', state.leftCollapsed);
  document.getElementById('aiSidebar').classList.toggle('collapsed', state.rightCollapsed);
  syncDrawerBackdrop();
  syncAllUI();
});
