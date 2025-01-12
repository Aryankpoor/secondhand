import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


function getSalesData() {
        
}

export default function AdminDashboard() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard title="Sales" subtitle="Test" body="body" />
    </div>
    )
}

type DashboardCardProps = {
    title: string
    subtitle: string
    body: string
}

function DashboardCard({title, subtitle, body}: DashboardCardProps) {
    return    <Card>
            <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
            <CardDescription>{subtitle}</CardDescription>
            <CardContent>{body}</CardContent>
        </Card>
    
}