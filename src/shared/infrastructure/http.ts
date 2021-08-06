interface reqProps {
  url: string
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
  body?: any
}

export async function req<T>(
  props: reqProps
): Promise<
  | { status?: never; body?: never; success: boolean; error: Error }
  | { status: number; body: T; success: boolean; error?: never }
> {
  try {
    const response = await fetch(props.url, {
      method: props.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: props.body ? JSON.stringify(props.body) : null,
    })
    return {
      status: response.status,
      body: (await response.json()) as T,
      success: response.status > 199 && response.status < 399,
    }
  } catch (error) {
    return { success: false, error: error }
  }
}
