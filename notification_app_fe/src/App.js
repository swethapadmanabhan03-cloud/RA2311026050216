import React, { useState } from 'react';
import { Log } from './logger';
import {
  Container, Typography, Box, Card, CardContent,
  IconButton, Chip, AppBar, Toolbar, Badge
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const initialNotifications = [
  { id: 1, type: 'info', title: 'System Update', message: 'A new update is available.', read: false, time: '2 min ago' },
  { id: 2, type: 'success', title: 'Upload Complete', message: 'Your file was uploaded successfully.', read: false, time: '5 min ago' },
  { id: 3, type: 'warning', title: 'Low Storage', message: 'You are running low on storage.', read: false, time: '10 min ago' },
  { id: 4, type: 'error', title: 'Login Failed', message: 'Invalid credentials detected.', read: false, time: '15 min ago' },
  { id: 5, type: 'info', title: 'New Message', message: 'You have a new message from Admin.', read: false, time: '20 min ago' },
];

const typeConfig = {
  info:    { color: '#1976d2', bg: '#e3f2fd', icon: <InfoIcon /> },
  success: { color: '#2e7d32', bg: '#e8f5e9', icon: <CheckCircleIcon /> },
  warning: { color: '#ed6c02', bg: '#fff3e0', icon: <WarningIcon /> },
  error:   { color: '#d32f2f', bg: '#fdecea', icon: <ErrorIcon /> },
};

function App() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
    Log("frontend", "info", "component", "Notification marked as read");
  
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    Log("frontend", "info", "component", "All notifications marked read");
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <AppBar position="static" sx={{ backgroundColor: '#1565c0' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Notification Center
          </Typography>
          <IconButton color="inherit" onClick={markAllRead} title="Mark all read">
            <DoneAllIcon />
          </IconButton>
          <Badge badgeContent={unreadCount} color="error" sx={{ ml: 1 }}>
            <NotificationsIcon />
          </Badge>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Notifications ({unreadCount} unread)
        </Typography>

        {notifications.length === 0 && (
          <Box textAlign="center" mt={8}>
            <NotificationsIcon sx={{ fontSize: 80, color: '#ccc' }} />
            <Typography color="textSecondary" mt={2}>
              No notifications!
            </Typography>
          </Box>
        )}

        {notifications.map(notification => {
          const config = typeConfig[notification.type];
          return (
            <Card
              key={notification.id}
              sx={{
                mb: 2,
                backgroundColor: notification.read ? '#fff' : config.bg,
                border: `1px solid ${config.color}`,
                opacity: notification.read ? 0.7 : 1,
                transition: 'all 0.3s ease'
              }}
            >
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: config.color }}>
                  {config.icon}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography fontWeight="bold">{notification.title}</Typography>
                    <Chip
                      label={notification.type}
                      size="small"
                      sx={{ backgroundColor: config.color, color: '#fff', fontSize: '10px' }}
                    />
                    {!notification.read && (
                      <Chip label="NEW" size="small" color="error" sx={{ fontSize: '10px' }} />
                    )}
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {notification.message}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {notification.time}
                  </Typography>
                </Box>
                <Box display="flex" gap={1}>
                  {!notification.read && (
                    <IconButton
                      size="small"
                      onClick={() => markAsRead(notification.id)}
                      sx={{ color: config.color }}
                      title="Mark as read"
                    >
                      <CheckCircleIcon />
                    </IconButton>
                  )}
                  <IconButton
                    size="small"
                    onClick={() => deleteNotification(notification.id)}
                    sx={{ color: '#d32f2f' }}
                    title="Delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </Box>
  );
}

export default App;