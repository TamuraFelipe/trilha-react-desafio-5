import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://tqwrxrbrmraszcgyrsnc.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxd3J4cmJybXJhc3pjZ3lyc25jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDg5NTE2NCwiZXhwIjoyMDA2NDcxMTY0fQ.-SmXfSb3rYVRNu-a9RQ77_Dhxe5Sv_3fBDBcs7FalzU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxd3J4cmJybXJhc3pjZ3lyc25jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDg5NTE2NCwiZXhwIjoyMDA2NDcxMTY0fQ.-SmXfSb3rYVRNu-a9RQ77_Dhxe5Sv_3fBDBcs7FalzU"
    }
})