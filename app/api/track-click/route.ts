import { NextRequest, NextResponse } from 'next/server';

const SPREADSHEET_ID = '16cGE5lKH9uywrpEXyswH-ztZHkFaAk5pEFE3Gtltz4I';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tool, slug, url, referrer } = body;

    if (!tool || !slug) {
      return NextResponse.json({ ok: true }); // fail silently, don't block user
    }

    const timestamp = new Date().toISOString();
    const campaign = slug;

    // Log to Google Sheets via CodeWords Composio
    const runtimeUri = process.env.CODEWORDS_RUNTIME_URI;
    const apiKey = process.env.CODEWORDS_API_KEY;

    if (runtimeUri && apiKey) {
      fetch(`${runtimeUri}/run/composio/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          tool_slug: 'GOOGLESHEETS_BATCH_UPDATE',
          arguments: {
            spreadsheet_id: SPREADSHEET_ID,
            sheet_name: 'Sheet1',
            values: [[timestamp, tool, slug, url || '', campaign, referrer || 'direct']],
            valueInputOption: 'RAW',
          },
        }),
      }).catch((err) => {
        console.error('Sheet logging failed:', err);
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true }); // never block the user
  }
}

