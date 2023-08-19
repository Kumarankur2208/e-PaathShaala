package com.cdac.epaathshaala.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "notifications")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long notification_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String message;
    private Date timestamp;

    private boolean isRead; // Indicates whether the notification has been read by the user
    private String type; // Specifies the type of notification (e.g., general, course-related)

    // Constructors, getters, setters

}
