// Admin credentials
    const ADMIN_USER = 'admin';
    const ADMIN_PASS = 'echanneling2026';

    function handleLogin(e) {
      e.preventDefault();
      const user = document.getElementById('username').value.trim();
      const pass = document.getElementById('password').value;
      const errorBox = document.getElementById('error-box');
      const btn = document.getElementById('login-btn');
      const btnText = document.getElementById('btn-text');
      const btnIcon = document.getElementById('btn-icon');

      // Loading state
      btn.disabled = true;
      btnText.textContent = 'Signing in…';
      btnIcon.className = 'ti ti-loader-2';
      btn.style.opacity = '0.8';

      setTimeout(() => {
        if (user === ADMIN_USER && pass === ADMIN_PASS) {
          // Success — go to doctors dashboard
          btnText.textContent = 'Success!';
          btnIcon.className = 'ti ti-check';
          btn.style.background = '#3b6d11';
          errorBox.style.display = 'none';
          setTimeout(() => {
            window.location.href = 'doctors-dashboard.html';
          }, 600);
        } else {
          // Failure
          errorBox.style.display = 'flex';
          btn.disabled = false;
          btnText.textContent = 'Sign In';
          btnIcon.className = 'ti ti-arrow-right';
          btn.style.opacity = '1';
          document.getElementById('password').value = '';
          document.getElementById('username').focus();
        }
      }, 800);
    }

    function togglePw() {
      const input = document.getElementById('password');
      const icon = document.getElementById('pw-icon');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'ti ti-eye-off';
      } else {
        input.type = 'password';
        icon.className = 'ti ti-eye';
      }
    }

    /*--------Doctors dashboard---------*/
    const doctors = [
      {
        name: 'Dr. Okanda Sudusinghe', spec: 'Neurologist', hospital: 'NHSL, Colombo',
        status: 'On Duty', initials: 'OS',
        schedule: [
          { time: '08:00 – 10:00 AM', type: 'Active', cap: 6, filled: 6 },
          { time: '10:00 – 10:30 AM', type: 'Break',  cap: 0, filled: 0 },
          { time: '10:30 – 12:30 PM', type: 'Active', cap: 6, filled: 2 },
        ],
        appointments: [
          { no:'#001', time:'08:00 AM', patient:'Nimali Perera',    reason:'Headache review',    status:'Done' },
          { no:'#002', time:'08:20 AM', patient:'Ruwan Bandara',    reason:'MRI follow-up',       status:'Done' },
          { no:'#003', time:'10:30 AM', patient:'Chamari Silva',    reason:'New consultation',    status:'Confirmed' },
          { no:'#004', time:'11:00 AM', patient:'Kamal Fernando',   reason:'Prescription renewal',status:'Pending' },
        ]
      },
      {
        name: 'Dr. Dulsara Sachintha', spec: 'Cardiologist', hospital: 'Colombo South Teaching Hospital',
        status: 'On Duty', initials: 'DS',
        schedule: [
          { time: '09:00 – 11:00 AM', type: 'Active', cap: 6, filled: 5 },
          { time: '12:00 – 02:00 PM', type: 'Active', cap: 4, filled: 0 },
        ],
        appointments: [
          { no:'#001', time:'09:00 AM', patient:'Lasith Gunaratne', reason:'ECG review',          status:'Done' },
          { no:'#002', time:'09:20 AM', patient:'Sunethra Perera',  reason:'Blood pressure check',status:'Confirmed' },
          { no:'#003', time:'09:40 AM', patient:'Dilan Jayawardena',reason:'Chest pain follow-up',status:'Pending' },
        ]
      },
      {
        name: 'Dr. Achinthya Pasansith', spec: 'Orthopedic Surgeon', hospital: 'Kandy General Hospital',
        status: 'On Duty', initials: 'AP',
        schedule: [
          { time: '08:00 – 12:00 PM', type: 'Active', cap: 8, filled: 8 },
          { time: '01:00 – 03:00 PM', type: 'Active', cap: 6, filled: 4 },
        ],
        appointments: [
          { no:'#001', time:'08:00 AM', patient:'Mahesh Rathnayake', reason:'Knee surgery review', status:'Done' },
          { no:'#002', time:'08:30 AM', patient:'Kumari Jayasena',   reason:'Back pain consult',   status:'Done' },
          { no:'#003', time:'01:00 PM', patient:'Tharaka Wijesiri',  reason:'X-ray follow-up',     status:'Confirmed' },
        ]
      },
      {
        name: 'Dr. Isuri Deemanthi', spec: 'Pediatrician', hospital: 'Lady Ridgeway Hospital',
        status: 'On Duty', initials: 'ID',
        schedule: [
          { time: '08:00 – 10:00 AM', type: 'Active', cap: 9, filled: 9 },
          { time: '10:30 AM – 01:00 PM', type: 'Active', cap: 9, filled: 9 },
        ],
        appointments: [
          { no:'#001', time:'08:00 AM', patient:'Baby Sanduni',    reason:'Vaccination',         status:'Done' },
          { no:'#002', time:'08:20 AM', patient:'Ishan Perera',    reason:'Fever follow-up',     status:'Done' },
          { no:'#003', time:'10:30 AM', patient:'Dilki Fernando',  reason:'Growth check',        status:'Confirmed' },
          { no:'#004', time:'11:00 AM', patient:'Ruwani Silva',    reason:'Asthma review',       status:'Confirmed' },
        ]
      },
      {
        name: 'Dr. Dasuni Rajapaksa', spec: 'Dermatologist', hospital: 'National Hospital, Colombo',
        status: 'On Leave', initials: 'DR',
        schedule: [],
        appointments: []
      },
      {
        name: 'Dr. Nadun Madagama', spec: 'Gynecologist', hospital: 'De Soysa Hospital, Colombo',
        status: 'On Duty', initials: 'NM',
        schedule: [
          { time: '08:00 – 10:00 AM', type: 'Active', cap: 8, filled: 8 },
          { time: '10:30 AM – 12:30 PM', type: 'Active', cap: 6, filled: 4 },
          { time: '02:00 – 04:00 PM', type: 'Active', cap: 6, filled: 3 },
        ],
        appointments: [
          { no:'#001', time:'08:00 AM', patient:'Samanthi Rathnayake','reason':'Prenatal checkup', status:'Done' },
          { no:'#002', time:'08:20 AM', patient:'Iresha Kumari',       reason:'Routine exam',       status:'Done' },
          { no:'#003', time:'10:30 AM', patient:'Nethmi Jayawardena',  reason:'Ultrasound follow-up',status:'Confirmed' },
          { no:'#004', time:'02:00 PM', patient:'Dinusha Perera',      reason:'New consultation',   status:'Pending' },
        ]
      },
      {
        name: 'Dr. Fazna Kamil', spec: 'Pediatrician', hospital: 'Lady Ridgeway Hospital',
        status: 'On Duty', initials: 'FK',
        schedule: [
          { time: '08:00 – 10:00 AM', type: 'Active', cap: 9, filled: 9 },
          { time: '10:30 AM – 01:00 PM', type: 'Active', cap: 9, filled: 9 },
        ],
        appointments: [
          { no:'#001', time:'08:00 AM', patient:'Baby Sanduni',    reason:'Vaccination',         status:'Done' },
          { no:'#002', time:'08:20 AM', patient:'Ishan Perera',    reason:'Fever follow-up',     status:'Done' },
          { no:'#003', time:'10:30 AM', patient:'Dilki Fernando',  reason:'Growth check',        status:'Confirmed' },
          { no:'#004', time:'11:00 AM', patient:'Ruwani Silva',    reason:'Asthma review',       status:'Confirmed' },
        ]
      },
      {
        name: 'Dr. Nisal Dasanayake', spec: 'Dermatologist', hospital: 'National Hospital, Colombo',
        status: 'On Leave', initials: 'ND',
        schedule: [],
        appointments: []
      }
    ];

    function statusColor(s) {
      if (s === 'Done')      return 'status-done';
      if (s === 'Confirmed') return 'status-confirmed';
      if (s === 'Pending')   return 'status-pending';
      if (s === 'Cancelled') return 'status-cancelled';
      return '';
    }

    function openDocModal(idx, editMode) {
      const d = doctors[idx];
      let scheduleRows;

      if (editMode) {
        scheduleRows = d.schedule.length
          ? d.schedule.map((s, i) => `
              <div class="modal-slot-row edit-row">
                <select class="edit-input edit-type" id="sch-type-${i}">
                  <option value="Active" ${s.type==='Active'?'selected':''}>Active</option>
                  <option value="Break" ${s.type==='Break'?'selected':''}>Break</option>
                </select>
                <input class="edit-input edit-time" id="sch-time-${i}" type="text" value="${s.time}">
                <input class="edit-input edit-num" id="sch-filled-${i}" type="number" min="0" value="${s.filled}" placeholder="Filled">
                <span class="edit-slash">/</span>
                <input class="edit-input edit-num" id="sch-cap-${i}" type="number" min="0" value="${s.cap}" placeholder="Cap">
                <button class="edit-del-btn" onclick="deleteScheduleSlot(${idx},${i})" title="Delete slot">
                  <i class="ti ti-trash"></i>
                </button>
              </div>`).join('')
          : '<p class="modal-empty"><i class="ti ti-calendar-off"></i> No sessions scheduled — doctor is on leave.</p>';

        document.getElementById('modal-box').innerHTML = `
          <div class="modal-head">
            <div class="modal-avatar">${d.initials}</div>
            <div>
              <h3 class="modal-doc-name">${d.name}</h3>
              <p class="modal-doc-spec">${d.spec} &middot; ${d.hospital}</p>
            </div>
            <button class="modal-close" onclick="closeModal()"><i class="ti ti-x"></i></button>
          </div>
          <h4 class="modal-section-title"><i class="ti ti-clock"></i> Edit Today's Session Slots</h4>
          <div class="modal-slots">${scheduleRows}</div>
          <div class="modal-foot edit-foot">
            <button class="modal-appt-btn add-btn" onclick="addScheduleSlot(${idx})">
              <i class="ti ti-plus"></i> Add Slot
            </button>
            <button class="modal-appt-btn save-btn" onclick="saveSchedule(${idx})">
              <i class="ti ti-check"></i> Save Changes
            </button>
            <button class="modal-appt-btn cancel-btn" onclick="openDocModal(${idx})">
              <i class="ti ti-x"></i> Cancel
            </button>
          </div>`;
        document.getElementById('modal-overlay').classList.add('open');
        return;
      }

      scheduleRows = d.schedule.length
        ? d.schedule.map(s => `
            <div class="modal-slot-row">
              <span class="ms-badge ${s.type === 'Active' ? 'msb-active' : 'msb-break'}">${s.type}</span>
              <span class="ms-time">${s.time}</span>
              <span class="ms-cap">${s.type === 'Active' ? `${s.filled} / ${s.cap} slots filled` : 'Rest break'}</span>
              ${s.type === 'Active' ? `<div class="ms-bar"><div class="ms-fill" style="width:${Math.round(s.filled/s.cap*100)}%"></div></div>` : '<div></div>'}
            </div>`).join('')
        : '<p class="modal-empty"><i class="ti ti-calendar-off"></i> No sessions scheduled — doctor is on leave.</p>';

      document.getElementById('modal-box').innerHTML = `
        <div class="modal-head">
          <div class="modal-avatar">${d.initials}</div>
          <div>
            <h3 class="modal-doc-name">${d.name}</h3>
            <p class="modal-doc-spec">${d.spec} &middot; ${d.hospital}</p>
          </div>
          <button class="modal-close" onclick="closeModal()"><i class="ti ti-x"></i></button>
        </div>
        <h4 class="modal-section-title"><i class="ti ti-clock"></i> Today's Session Slots</h4>
        <div class="modal-slots">${scheduleRows}</div>
        <div class="modal-foot">
          <button class="modal-appt-btn edit-btn" onclick="openDocModal(${idx}, true)">
            <i class="ti ti-edit"></i> Edit Schedule
          </button>
          <button class="modal-appt-btn" onclick="closeModal();openApptModal(${idx})">
            <i class="ti ti-calendar-event"></i> View Appointments
          </button>
        </div>`;
      document.getElementById('modal-overlay').classList.add('open');
    }

    function addScheduleSlot(idx) {
      doctors[idx].schedule.push({ time: '00:00 – 00:00', type: 'Active', cap: 1, filled: 0 });
      openDocModal(idx, true);
    }

    function deleteScheduleSlot(idx, slotIdx) {
      doctors[idx].schedule.splice(slotIdx, 1);
      openDocModal(idx, true);
    }

    function saveSchedule(idx) {
      const d = doctors[idx];
      d.schedule.forEach((s, i) => {
        const type = document.getElementById(`sch-type-${i}`).value;
        const time = document.getElementById(`sch-time-${i}`).value.trim() || s.time;
        let filled = parseInt(document.getElementById(`sch-filled-${i}`).value, 10);
        let cap = parseInt(document.getElementById(`sch-cap-${i}`).value, 10);
        if (isNaN(cap) || cap < 0) cap = s.cap;
        if (isNaN(filled) || filled < 0) filled = s.filled;
        if (filled > cap) filled = cap;
        s.type = type;
        s.time = time;
        s.cap = cap;
        s.filled = filled;
      });
      openDocModal(idx);
    }

    function openApptModal(idx, editMode) {
      const d = doctors[idx];
      let rows;

      if (editMode) {
        rows = d.appointments.length
          ? d.appointments.map((a, i) => `
              <div class="appt-row edit-row">
                <span class="appt-no">${a.no}</span>
                <input class="edit-input edit-time" id="appt-time-${i}" type="text" value="${a.time}">
                <input class="edit-input edit-patient" id="appt-patient-${i}" type="text" value="${a.patient}">
                <input class="edit-input edit-reason" id="appt-reason-${i}" type="text" value="${a.reason}">
                <select class="edit-input edit-status" id="appt-status-${i}">
                  ${['Pending','Confirmed','Done','Cancelled'].map(st => `<option value="${st}" ${a.status===st?'selected':''}>${st}</option>`).join('')}
                </select>
                <button class="edit-del-btn" onclick="deleteAppointment(${idx},${i})" title="Delete appointment">
                  <i class="ti ti-trash"></i>
                </button>
              </div>`).join('')
          : '<p class="modal-empty"><i class="ti ti-calendar-off"></i> No appointments today — doctor is on leave.</p>';

        document.getElementById('modal-box').innerHTML = `
          <div class="modal-head">
            <div class="modal-avatar">${d.initials}</div>
            <div>
              <h3 class="modal-doc-name">${d.name}</h3>
              <p class="modal-doc-spec">${d.spec} &middot; Edit Appointments</p>
            </div>
            <button class="modal-close" onclick="closeModal()"><i class="ti ti-x"></i></button>
          </div>
          <h4 class="modal-section-title"><i class="ti ti-calendar-event"></i> Edit Appointment List</h4>
          <div class="appt-list">${rows}</div>
          <div class="modal-foot edit-foot">
            <button class="modal-appt-btn add-btn" onclick="addAppointment(${idx})">
              <i class="ti ti-plus"></i> Add Appointment
            </button>
            <button class="modal-appt-btn save-btn" onclick="saveAppointments(${idx})">
              <i class="ti ti-check"></i> Save Changes
            </button>
            <button class="modal-appt-btn cancel-btn" onclick="openApptModal(${idx})">
              <i class="ti ti-x"></i> Cancel
            </button>
          </div>`;
        document.getElementById('modal-overlay').classList.add('open');
        return;
      }

      rows = d.appointments.length
        ? d.appointments.map(a => `
            <div class="appt-row">
              <span class="appt-no">${a.no}</span>
              <span class="appt-time"><i class="ti ti-clock"></i> ${a.time}</span>
              <span class="appt-patient"><i class="ti ti-user"></i> ${a.patient}</span>
              <span class="appt-reason">${a.reason}</span>
              <span class="appt-status ${statusColor(a.status)}">${a.status}</span>
            </div>`).join('')
        : '<p class="modal-empty"><i class="ti ti-calendar-off"></i> No appointments today — doctor is on leave.</p>';

      document.getElementById('modal-box').innerHTML = `
        <div class="modal-head">
          <div class="modal-avatar">${d.initials}</div>
          <div>
            <h3 class="modal-doc-name">${d.name}</h3>
            <p class="modal-doc-spec">${d.spec} &middot; Today's Appointments</p>
          </div>
          <button class="modal-close" onclick="closeModal()"><i class="ti ti-x"></i></button>
        </div>
        <h4 class="modal-section-title"><i class="ti ti-calendar-event"></i> Appointment List</h4>
        <div class="appt-list">${rows}</div>
        <div class="modal-foot">
          <button class="modal-appt-btn edit-btn" onclick="openApptModal(${idx}, true)">
            <i class="ti ti-edit"></i> Edit Appointments
          </button>
          <button class="modal-appt-btn" onclick="closeModal();openDocModal(${idx})">
            <i class="ti ti-clock"></i> View Schedule
          </button>
        </div>`;
      document.getElementById('modal-overlay').classList.add('open');
    }

    function addAppointment(idx) {
      const d = doctors[idx];
      const nextNum = (d.appointments.length + 1).toString().padStart(3, '0');
      d.appointments.push({ no: `#${nextNum}`, time: '00:00 AM', patient: 'New Patient', reason: '—', status: 'Pending' });
      openApptModal(idx, true);
    }

    function deleteAppointment(idx, apptIdx) {
      doctors[idx].appointments.splice(apptIdx, 1);
      openApptModal(idx, true);
    }

    function saveAppointments(idx) {
      const d = doctors[idx];
      d.appointments.forEach((a, i) => {
        a.time = document.getElementById(`appt-time-${i}`).value.trim() || a.time;
        a.patient = document.getElementById(`appt-patient-${i}`).value.trim() || a.patient;
        a.reason = document.getElementById(`appt-reason-${i}`).value.trim() || a.reason;
        a.status = document.getElementById(`appt-status-${i}`).value;
      });
      openApptModal(idx);
    }

    function closeModal() {
      document.getElementById('modal-overlay').classList.remove('open');
    }

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    function filterCards(val) {
      val = val.toLowerCase();
      const cards = document.querySelectorAll('.doc-card');
      let visible = 0;
      cards.forEach(c => {
        const match = c.dataset.name.includes(val) || c.dataset.spec.includes(val);
        c.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      document.getElementById('empty-state').style.display = visible ? 'none' : 'block';
    }

    function filterBySpec(val) {
      val = val.toLowerCase();
      const cards = document.querySelectorAll('.doc-card');
      let visible = 0;
      cards.forEach(c => {
        const match = !val || c.dataset.spec === val;
        c.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      document.getElementById('empty-state').style.display = visible ? 'none' : 'block';
    }