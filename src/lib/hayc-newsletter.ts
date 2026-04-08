const NEWSLETTER_API_KEY = '8c5394ce-4eea-46d6-ac32-fd8eb41cc9f3';
const NEWSLETTER_ENDPOINT = 'https://hayc.gr/api/newsletter/subscribe';
const NEWSLETTER_SOURCE_SESSION_KEY = 'hayc_from_newsletter';

export interface HaycNewsletterPayload {
  email: string;
  firstName?: string;
  lastName?: string;
  subscribed: boolean;
  tags: string[];
}

export function markNewsletterSourceFromCurrentUrl(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = (params.get('utm_source') || '').toLowerCase();
    const source = (params.get('source') || '').toLowerCase();
    const fromNewsletter = utmSource === 'newsletter' || source === 'newsletter';
    if (fromNewsletter) sessionStorage.setItem(NEWSLETTER_SOURCE_SESSION_KEY, '1');
  } catch {
    // no-op
  }
}

export function hasNewsletterSourceTag(): boolean {
  try {
    return sessionStorage.getItem(NEWSLETTER_SOURCE_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

export async function subscribeContactToHaycList(payload: HaycNewsletterPayload): Promise<void> {
  const tags = Array.from(new Set(payload.tags.map((t) => t.trim()).filter(Boolean))).join(', ');

  const res = await fetch(NEWSLETTER_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key: NEWSLETTER_API_KEY,
      email: payload.email.trim(),
      firstName: (payload.firstName || '').trim(),
      lastName: (payload.lastName || '').trim(),
      subscribed: payload.subscribed,
      tags: tags || 'Contact Form',
    }),
  });

  if (!res.ok) throw new Error('Newsletter subscription request failed');
}

